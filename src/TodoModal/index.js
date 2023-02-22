import ReactDOM from 'react-dom';
import './TodoModal.css';

function TodoModalCreate({children}) {
    return (
        ReactDOM.createPortal(
            <div className='TodoModal'>
                {children}
            </div>
            , document.getElementById('todoModal')
        )
    );
}

function TodoModalDelete({children}) {
    return (
        ReactDOM.createPortal(
            <div className='TodoModal'>
                {children}
            </div>
            , document.getElementById('todoModal')
        )
    );
}

export {
    TodoModalCreate
    , TodoModalDelete
}