import React, { useEffect, useRef, useState } from 'react';
import './Todo.css';
import TodoItems from '../TodoItems/TodoItems';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  const add = () => {
    if (inputRef.current.value.trim() === "") {
      window.alert("Please Enter a Task");
    } else {
      setTodos([...todos, { no: Date.now(), text: inputRef.current.value, display: "" }]);
      inputRef.current.value = "";
    }
  };

  const removeTodo = (no) => {
    const updatedTodos = todos.filter(todo => todo.no !== no);
    setTodos(updatedTodos);
  };

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="todo" id="todo">
      <div className="todo-header">To-do List</div>
      <div className="todo-content">
        <input ref={inputRef} type="text" placeholder="Enter Task" />
        <button onClick={add} className="todo-button">Add</button>
      </div>
      <div className="todo-text">
        {todos.map((item, index) => (
          <TodoItems
            key={index}
            no={item.no}
            text={item.text}
            display={item.display}
            removeTodo={removeTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;
