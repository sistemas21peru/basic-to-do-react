import React from "react";

function TodoHeader({children, getTodoLoadingValue}) {
    return (
        <header>
            {
                React.Children.toArray(children).map(x => React.cloneElement(x, {getTodoLoadingValue: getTodoLoadingValue}))
            }
        </header>
    );
}

export {
    TodoHeader
}