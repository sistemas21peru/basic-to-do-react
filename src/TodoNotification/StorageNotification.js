import React from "react";

function useStorageNotification(reloadTodo) {
    const [getShowNotification, setShowNotification] = React.useState(false);
    window.addEventListener('storage', (changes) =>
    {
        if (changes.key === 'TODO_V1') {
            setShowNotification(true);
        }
    })

    const reloadSite = () => {
        reloadTodo();
        setShowNotification(false);
    };
    return {
        getShowNotification
        , reloadSite
    };
}

export {
    useStorageNotification
}