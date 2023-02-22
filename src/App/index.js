import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoCreateButton } from "../TodoCreateButton";
import { TodoError } from "../TodoError";
import { TodoLoading } from "../TodoLoading";
import { TodoFormCreate, TodoFormDelete } from "../TodoForm";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoModalDelete, TodoModalCreate } from "../TodoModal";
import { TodoSearch } from "../TodoSearch";
import { useTodo } from "./useTodo";
import { TodoHeader } from "../TodoHeader";
import { TodoEmpty } from "../TodoEmpty";
import { ShowNotification } from "../TodoNotification/index";

function App() {
    const {
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
    } = useTodo();
    return (
        <React.Fragment>
            <TodoHeader getTodoLoadingValue={getTodoLoadingValue}>
                <TodoCounter
                    totalTodo={totalTodo}
                    totalTodoComplete={totalTodoComplete}/>
                <TodoSearch
                    onSearchTodo={onSearchTodo}/>
            </TodoHeader>
            <TodoList
                getTodoErrorValue={getTodoErrorValue}
                getTodoLoadingValue={getTodoLoadingValue}
                todoListData={todoListData}
                onTodoError={() => <TodoError/>}
                onTodoLoading={() => <TodoLoading/>}
                onTodoEmpty={() => <TodoEmpty/>}
            >
                {
                    x => (
                        <TodoItem
                            key={x.Description}
                            description={x.Description}
                            completed={x.Completed}
                            onCompleteTodo={() => onCompleteTodo(x.Description)}
                            onOpenCloseModalDelete={() => onOpenCloseModalDelete(x.Description)}/>
                    )
                }
            </TodoList>
            <TodoCreateButton onOpenCloseModal={onOpenCloseModalCreate} getTodoLoadingValue={getTodoLoadingValue}/>

            {
                getModalCreateValue && (
                    <TodoModalCreate>
                        <TodoFormCreate
                            onOpenCloseModal={onOpenCloseModalCreate}
                            onCreateTodo={onCreateTodo}
                            onChangeTextForm={onChangeTextForm}/>
                    </TodoModalCreate>
                )
            }

            {
                getModalDeleteValue && (
                    <TodoModalDelete>
                        <TodoFormDelete
                            getTodoSelectedValue={getTodoSelectedValue}
                            onOpenCloseModalDelete={() => onOpenCloseModalDelete('')}
                            onDeleteTodo={onDeleteTodo}/>
                    </TodoModalDelete>
                )
            }

            <ShowNotification reloadTodo={reloadTodo}/>
        </React.Fragment>
    );
}

export {
    App
}