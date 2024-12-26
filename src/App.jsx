import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <div className="main-wrapper">
        <h1>Todo List Using the Material UI</h1>
      </div>
      <TodoList/>
    </>
  );
}

export default App;
