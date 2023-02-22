import './TodoItem.css';
import { DeleteIcon } from "../TodoIcon/DeleteIcon";
import { CompleteIcon } from "../TodoIcon/CompleteIcon";

function TodoItem({description, completed, onCompleteTodo, onOpenCloseModalDelete}) {
    return (
    <li className="TodoItem">
        <CompleteIcon completed={completed} onCompleteTodo={onCompleteTodo}/>
        <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>
            {description}
        </p>
        <DeleteIcon onOpenCloseModalDelete={onOpenCloseModalDelete}/>
    </li>
    );
}

export {
    TodoItem
}