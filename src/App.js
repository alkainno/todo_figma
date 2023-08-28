import React, { useState } from "react";
import "./App.css";
import TodoTitle from "./TodoTitle";
import TodoList from "./TodoList";
// import green_dot from "./image/green.png";
// import purple_dot from "./image/purple.png";
// import red_dot from "./image/red.png";

function App() {
  const todo_for_test = [
    "Start Making a presentation",
    "Pay for rent",
    "Buy milk time",
    "Go for walk",
  ];
  const [todos, setTodos] = useState(todo_for_test);

  // const img1 = green_dot;
  // const img2 = purple_dot;
  // const img3 = red_dot;

  return (
    <div className="container">
      <TodoTitle addTodoItem={(newTodo) => setTodos([...todos, newTodo])} />

      {todos.map((todo, index) => (
        <TodoList key={index} todo={todo} index={index} />
      ))}
    </div>
  );
}

export default App;
