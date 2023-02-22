import "./TodoIcon.css";
import { BiCheck, BiCheckDouble } from 'react-icons/bi';

function CompleteIcon({ completed, onCompleteTodo }) {
    return (
        completed ?
        (<BiCheckDouble className='Icon-cursor' onClick={onCompleteTodo}/>) :
        <BiCheck className='Icon-cursor' onClick={onCompleteTodo}/>
    );
}

export { CompleteIcon };