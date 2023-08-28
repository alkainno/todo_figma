import React, { useState } from "react";
import circle from "./image/bi_plus-circle.png";
import "./App.css";

function TodoTitle({ addTodoItem }) {
  const [addTodo, setAddTodo] = useState(false);
  const [newTodo, setNewTodo] = useState("");
  const [datetimeValue, setDatetimeValue] = useState("");

  const toggleAddTodo = () => {
    setAddTodo(!addTodo);
    resetFields();
  };

  const resetFields = () => {
    setNewTodo("");
    setDatetimeValue("");
  };

  const addItem = () => {
    if (newTodo.trim() !== "" && datetimeValue !== "") {
      const selectedDate = new Date(datetimeValue);
      const options = {
        day: "numeric",
        month: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      };
      const formattedDate = selectedDate.toLocaleString("en-GB", options);
      addTodoItem(`${newTodo}\n(${formattedDate})`);
      resetFields();
      setAddTodo(false);
    }
  };

  const cancelAddTodo = () => {
    resetFields();
    setAddTodo(false);
  };

  return (
    <div className="title">
      <h1 className="heading">Today</h1>
      <div className="plus">
        <img
          src={circle}
          className="plus-sign"
          onClick={toggleAddTodo}
          alt="plus"
        />
      </div>
      {addTodo && (
        <div className="popup-overlay">
          <div className="add-todo-popup">
            <h4 className="add-todo">Add Todo</h4>
            <div className="popup-content">
              <textarea
                rows="5"
                cols="25"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                className="addNewTodo"
                placeholder="enter your todo...."
              />
              <input
                className="daytime-input"
                type="datetime-local"
                value={datetimeValue}
                onChange={(e) => setDatetimeValue(e.target.value)}
                min={new Date().toISOString().slice(0, 16)}
              />
            </div>
            <div className="buttons">
              <button className="cancel" onClick={cancelAddTodo}>
                Cancel
              </button>
              <button className="done" onClick={addItem}>
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TodoTitle;
