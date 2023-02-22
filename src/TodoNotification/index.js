import React from "react";
import { useStorageNotification } from "./StorageNotification";
import "./AlertNotification.css";

function ShowNotification({reloadTodo}) {
    const {
        getShowNotification
        , reloadSite
    } = useStorageNotification(reloadTodo);

    if (getShowNotification) {
        return (
            <React.Fragment>
                <div className="AlertNotification-bg">
                    <div className="AlertNotification-container">
                        <p>Changes Detected!</p>
                        <p>We recommend to reload the page!</p>
                        <button className="TodoForm-button TodoForm-button--add" onClick={reloadSite}>RELOAD</button>
                    </div>
                </div>
            </React.Fragment>
        );
    } else {
        return null;
    }
}

export {
    ShowNotification
}