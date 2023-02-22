import './TodoForm.css';

function TodoFormCreate({onOpenCloseModal, onCreateTodo, onChangeTextForm}) {
    return (
        <form onSubmit={onCreateTodo}>
            <label>TODO FORM</label>
            <textarea placeholder="type todo value" onChange={onChangeTextForm}/>
            <div className="TodoForm-buttonContainer">
                <button type="button" className="TodoForm-button " onClick={onOpenCloseModal}>Cancel</button>
                <button type="submit" className="TodoForm-button ">Add</button>
            </div>
        </form>
    );
}

function TodoFormDelete({getTodoSelectedValue, onOpenCloseModalDelete, onDeleteTodo}){
    return (
        <form onSubmit={onDeleteTodo}>
            <label>Do u' want to delete the {getTodoSelectedValue}?</label>
            <div className="TodoForm-buttonContainer">
                <button type="button" className="TodoForm-button " onClick={onOpenCloseModalDelete}>Cancel</button>
                <button type="submit" className="TodoForm-button ">Delete</button>
            </div>
        </form>
    );
}

export {
    TodoFormCreate
    , TodoFormDelete
}