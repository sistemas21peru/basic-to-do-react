import "./TodoIcon.css";
import { IoCreate } from "react-icons/io5";

function CreateIcon({onOpenCloseModal, getTodoLoadingValue}) {
    return (
        <IoCreate className={`TodoCreateButton ${getTodoLoadingValue && "TodoCreateButton--loading"}`} onClick={onOpenCloseModal}/>
    );
}

export {
    CreateIcon
}