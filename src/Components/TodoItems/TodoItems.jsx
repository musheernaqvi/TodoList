// import { useState } from 'react'
// import cross from '../Assets/cross.png'
// import not_tick from '../Assets/not_tick.png'
// import tick from '../Assets/tick.png'
// import './TodoItems.css'

// const TodoItems = ({no,display,text}) => {
//   const [itemText, setItemText] = useState(text)
//   const [itemTick, setItemTick] = useState(tick);
//   const [itemNotTick, setItemNotTick] = useState(not_tick);
//   const [itemCross, setItemCross] = useState(cross);

//   const clear = () => {
//    setItemText("");
//    setItemTick("");
//    setItemNotTick("");
//    setItemCross("");
//   }


//   return (
// <div className="todoItems">
//     <div className="todoItems-container">
//        {display==="tick"?
//        <img src={itemTick} alt="" /> : 
//        <img src={itemNotTick} alt="" />} 
        
//         <div className="todoItems-text">{itemText}</div>
//     </div>
//     <img onClick= {clear}className='cross' src={itemCross} alt="" />
    
// </div>
// )
// }

// export default TodoItems

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

