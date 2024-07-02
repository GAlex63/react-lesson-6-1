import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash} from '@fortawesome/free-solid-svg-icons';

export function Todo({title, deleteTodo, editTodo}) {
    return (
        <div className='todo-item'>
            <div className="btn-block">
                <FontAwesomeIcon
                    icon={faPen} className="pen" onClick={() => editTodo(title.id)} />
                <FontAwesomeIcon
                    icon={faTrash} className="trash" onClick={() => deleteTodo(title.id)} />
            </div>
            
        </div>
    )
}