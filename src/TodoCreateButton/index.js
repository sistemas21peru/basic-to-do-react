import { CreateIcon } from '../TodoIcon/CreateIcon';

function TodoCreateButton({onOpenCloseModal, getTodoLoadingValue}) {
    return (
        <CreateIcon onOpenCloseModal={onOpenCloseModal} getTodoLoadingValue={getTodoLoadingValue}/>
    );
}

export {
    TodoCreateButton
}