import React, { useState } from 'react';
import cross from '../Assets/cross.png';
import not_tick from '../Assets/not_tick.png';
import tick from '../Assets/tick.png';
import './TodoItems.css';

const TodoItems = ({ no, text, removeTodo }) => {
  const [isTicked, setIsTicked] = useState(false);

  const toggleTick = () => {
    setIsTicked(!isTicked);
  };

  return (
    <div className="todoItems">
      <div className="todoItems-container">
        <img
          src={isTicked ? tick : not_tick}
          alt={isTicked ? 'Tick Icon' : 'Not Tick Icon'}
          onClick={toggleTick}
        />
        <div className="todoItems-text">{text}</div>
      </div>
      <img
        onClick={() => removeTodo(no)}
        className='cross'
        src={cross}
        alt="Cross Icon"
      />
    </div>
  );
};

export default TodoItems;

