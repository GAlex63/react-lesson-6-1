import { Link } from 'react-router-dom'

export function TodoList({ todos }) {

return (
    <div className='todo-list'>
        {todos.map((todo) => (
            <Link key={todo.id} to={`/task/${todo.id}`} className='todo-item'>
            {todo.title.length > 20 ? `${todo.title.substring(0, 20)}...` : todo.title}
            </Link>
        ))}
    </div>
    )  
}


