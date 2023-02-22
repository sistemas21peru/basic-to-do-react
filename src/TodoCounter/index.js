import './TodoCounter.css';
function TodoCounter({totalTodo, totalTodoComplete, getTodoLoadingValue}) {
    return (
        <h1 className={`TodoCounter ${getTodoLoadingValue && 'TodoCounter--loading'}`}>Have you completed {totalTodoComplete} of {totalTodo} TODOs</h1>
    );
}

export {
    TodoCounter
}