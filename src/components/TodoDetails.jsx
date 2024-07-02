import { useParams, Link } from 'react-router-dom';
import { useEdit } from './hooks/useEdit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { EditTodoForm } from './EditTodoForm';

export default function TodoDetails({ todos, setTodos, deleteTodo }) {
	const { id } = useParams();
	const todo = todos.find((todo) => todo.id === id);
	const { editTitle, isEditingTitle, setIsEditingTitle } = useEdit(todos, setTodos);

	return (
		<div className="todo-details">
			{!isEditingTitle ? (
			!todo ? (
				<div className='todo-empty'>Заметка не найдена</div>
			) : (
				<>
					<h4>{todo.title}</h4>
					<div className="btn-block">
						<FontAwesomeIcon
							icon={faPen}
							className="pen"
							onClick={() => {
								setIsEditingTitle(true)
							}}
						/>
						<FontAwesomeIcon
							icon={faTrash}
							className="trash"
							onClick={() => deleteTodo(todo.id)}
						/>
					</div>
				</>
			) ) : (<EditTodoForm editTitle={editTitle} todo={todo} setIsEditingTitle={setIsEditingTitle}/>)}
			<button className="btn-backspace">
				<Link className="text-link" to="/">
					Назад
				</Link>
			</button>
		</div>
	)
}
