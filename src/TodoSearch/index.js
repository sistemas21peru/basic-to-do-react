import './TodoSearch.css';

function TodoSearch({onSearchTodo, getTodoLoadingValue}) {
    return (
        <input className='TodoSearch' placeholder="type todo value" onChange={onSearchTodo} disabled={getTodoLoadingValue}/>
    );
}

export {
    TodoSearch
}