import "./TodoIcon.css";
import { AiFillDelete } from 'react-icons/ai';

function DeleteIcon({ onOpenCloseModalDelete }) {
    return (
        <AiFillDelete className='Icon-cursor' onClick={onOpenCloseModalDelete}/>
    );
}

export {
    DeleteIcon
};