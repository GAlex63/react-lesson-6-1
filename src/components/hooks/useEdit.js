import { useState } from 'react';

export const useEdit = (todos, setTodos, isEditing) => {
	const [isEditingTitle, setIsEditingTitle] = useState(false);

	const editTodo = (id) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo,
			),
		);
	};

	const editTitle = (title, id) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, title, isEditing: !todo.isEditing } : todo,
			),
		);
	};

	return { editTodo, editTitle, isEditingTitle, setIsEditingTitle };
};
