import React, { useState, useEffect } from "react";
import unmark from "./image/Unmarked.png";
import mark from "./image/Marked.png";
import green_dot from "./image/green.png";
import purple_dot from "./image/purple.png";
import red_dot from "./image/red.png";
import "./App.css";

function TodoList(props) {
  const [marked, setMarked] = useState(false);
  const [showRedFlag, setShowRedFlag] = useState(false);
  const todoLines = props.todo.split("\n");

  const handleUnmarkClick = () => {
    setMarked(!marked);
  };

  useEffect(() => {
    const todo_time = todoLines[1];
    // console.log(todo_time);

    const intervalId = setInterval(() => {
      const current_time = new Date();
      console.log(current_time);
      if (current_time > todo_time) {
        setShowRedFlag(true);
        console.log("red_dot");
      } else {
        setShowRedFlag(false);
      }
    }, 60000);

    return () => {
      clearInterval(intervalId);
    };
  }, [todoLines]);

  return (
    <div className="content">
      <div className="item_list">
        <div className="marked-img">
          <img
            src={marked ? mark : unmark}
            alt="marked"
            className="marked"
            onClick={handleUnmarkClick}
          />
        </div>
        <div className="item">
          {todoLines.map((line, index) => (
            <p key={index} className="list">
              {line}
            </p>
          ))}
        </div>
        <div className="flags">
          <img
            src={showRedFlag ? red_dot : marked ? green_dot : purple_dot}
            alt="Flags"
            className="flag_img"
          />
        </div>
      </div>
      <hr />
    </div>
  );
}

export default TodoList;
