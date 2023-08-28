import React, { useState } from "react";
import unmark from "./image/Unmarked.png";
import mark from "./image/Marked.png";
import green_dot from "./image/green.png";
import purple_dot from "./image/purple.png";
import "./App.css";

function TodoList(props) {
  const [marked, setMarked] = useState(false);
  const todoLines = props.todo.split("\n");

  const handleUnmarkClick = () => {
    setMarked(!marked);
  };

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
              {console.log(line)}
            </p>
          ))}
        </div>
        <div className="flags">
          <img
            src={marked ? green_dot : purple_dot}
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
