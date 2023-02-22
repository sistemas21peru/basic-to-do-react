import React from "react";
import { useLocalStorage } from "./useLocalStorage";

function useTodo() {
    const {
        getTodoList
        , getTodoErrorValue
        , getTodoLoadingValue
        , updateTodo
        , reloadTodo
    } = useLocalStorage('TODO_V1');

    const [getSearchValue, setSearchValue] = React.useState('');
    const [getModalCreateValue, setModalCreateValue] = React.useState(false);
    const [getModalDeleteValue, setModalDeleteValue] = React.useState(false);
    const [getTodoTextFormValue, setTodoTextFormValue] = React.useState('');
    const [getTodoSelectedValue, setTodoSelectedValue] = React.useState('');

    const todoListData = getTodoList.filter(x =>
        x.Description.toLowerCase().includes(getSearchValue.toLowerCase())
    );
    const totalTodo = todoListData.length;
    const totalTodoComplete = todoListData.filter(x => x.Completed).length;

    const onSearchTodo = (e) => {
        setSearchValue(e.target.value);
    };

    const onCompleteTodo = (description) => {
        const index = todoListData.findIndex(x => x.Description === description);
        const entity = [...todoListData];
        entity[index].Completed = true;
        updateTodo(entity);
    };

    const onDeleteTodo = (e) => {
        e.preventDefault();
        const index = todoListData.findIndex(x => x.Description === getTodoSelectedValue);
        const entity = [...todoListData];
        entity.splice(index, 1);
        updateTodo(entity);
        onOpenCloseModalDelete('');
    }

    const onOpenCloseModalDelete = (description) => {
        setTodoSelectedValue(description);
        setModalDeleteValue(getModalDeleteValue === true ? false : true);
    }

    const onOpenCloseModalCreate = () => {
        setModalCreateValue(getModalCreateValue === true ? false : true);
    };

    const onChangeTextForm = (e) => {
        setTodoTextFormValue(e.target.value);
    };

    const onCreateTodo = (e) => {
        e.preventDefault();
        const entity = [...todoListData];
        entity.push({
            Description: getTodoTextFormValue,
            Completed: false
        });
        updateTodo(entity);
        onOpenCloseModalCreate();
    };

    return {
        todoListData
        , totalTodo
        , totalTodoComplete
        , getModalCreateValue
        , getTodoErrorValue
        , getTodoLoadingValue
        , getModalDeleteValue
        , getTodoSelectedValue
        , onSearchTodo
        , onCompleteTodo
        , onDeleteTodo
        , onOpenCloseModalCreate
        , onChangeTextForm
        , onCreateTodo
        , onOpenCloseModalDelete
        , reloadTodo
    };
}

export {
    useTodo
}