import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import useSearch from './components/hooks/useSearch';
import { useAddTodo } from './components/hooks/useAddTodo';
import useSortedTodo from './components/hooks/useSortedTodo';
import { useEdit } from './components/hooks/useEdit';
import { Todo } from './components/Todo';
import TodoDetails from './components/TodoDetails';

export const App = () => {
	const { searchQuery, handleSearch } = useSearch();
	const { todos, setTodos, addTodo, deleteTodo } = useAddTodo();
	const { isSorted, isSortedTodos, isFiltered, isFilteredTodos, sortTodo } =
		useSortedTodo(todos, searchQuery);
	const { editTodo, editTitle } = useEdit(todos, setTodos);

	return (
		<div className="App">
			<Routes>
				<Route
					path="/"
					element={
						<>
							<h1>Список добрых дел:</h1>
							<TodoForm addTodo={addTodo} />
							<div>
								<input
									className="search-input"
									type="text"
									value={searchQuery}
									onChange={handleSearch}
									placeholder="Поиск по фразе"
								></input>
								<button className="btn-sort" onClick={() => sortTodo()}>
									{isSorted ? 'Изначальный порядок' : 'По алфавиту'}
								</button>
							</div>
							<TodoList
								todos={
									isFiltered
										? isFilteredTodos
										: isSorted
											? isSortedTodos
											: todos
								}
							/>
						</>
					}
				/>
				<Route
					path="/task/:id"
					element={
						<TodoDetails
							todos={todos}
							setTodos={setTodos}
							editTitle={editTitle}
							deleteTodo={deleteTodo}
							editTodo={editTodo}
						/>
					}
				/>
			</Routes>
		</div>
	);
};
