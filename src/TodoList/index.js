import './TodoList.css';

function TodoList(props) {
    const renderFunc = props.render || props.children;
    return (
        <section>
            {props.getTodoErrorValue && props.onTodoError()}
            {props.getTodoLoadingValue && props.onTodoLoading()}
            {!props.getTodoLoadingValue && props.todoListData.length === 0 && props.onTodoEmpty()}

            {props.todoListData.map(renderFunc)}
        </section>
    );
}

export {
    TodoList
}