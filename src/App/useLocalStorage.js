import React from "react";

function useLocalStorage(key) {
    const [getTodoList, setTodoList] = React.useState([]);
    const [getTodoErrorValue, setTodoErrorValue] = React.useState('');
    const [getTodoLoadingValue, setTodoLoadingValue] = React.useState(true);
    const [getTodoReload, setTodoReload] = React.useState(false);

    const defaultData = [
        {Description: 'ReactJs', Completed: false},
        {Description: 'Angular', Completed: false},
        {Description: 'NodeJs', Completed: false},
        {Description: 'AWS Developer', Completed: false},
        {Description: 'Phyton', Completed: false}
    ];
    React.useEffect(() => {
        setTimeout(() => {
            try {
                if (!localStorage.getItem(key)) {
                    localStorage.setItem(key, JSON.stringify(defaultData));
                    setTodoList(defaultData);
                } else {
                    setTodoList(JSON.parse(localStorage.getItem(key)));
                }
                setTodoLoadingValue(false);
                setTodoReload(false);
            } catch (error) {
                setTodoErrorValue(error);
            }
        }, 3000);
    }, [getTodoReload]);

    const updateTodo = (entity) => {
        localStorage.setItem(key, JSON.stringify(entity));
        setTodoList(entity);
    };

    const reloadTodo = () => {
        setTodoLoadingValue(true);
        setTodoReload(true);
    };

    return {
        getTodoList
        , getTodoErrorValue
        , getTodoLoadingValue
        , updateTodo
        , reloadTodo
    };
}

export {
    useLocalStorage
}