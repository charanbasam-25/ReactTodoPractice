import { useState } from "react";
import { useEffect } from "react";
import TodoItem from "./TodoItem";
import TodoDetail from "./TodoDetail";

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [eachTodoDetails, setEachTodoDetails] = useState(null);
  const [openDailog, setOpenDailog] = useState(false);

  async function fetchTodoList() {
    setLoading(true);
    try {
      const response = await fetch("https://dummyjson.com/todos");
      const result = await response.json();
      setLoading(false);
      setTodoList(result);
    } catch (error) {
      setLoading(false);
      setError;
      console.log(error);
    }
  }

  async function fetchCurrentTodoDetails(id) {
    const response = await fetch(`https://dummyjson.com/todos/${id}`);
    const result = await response.json();
    setEachTodoDetails(result);
    setOpenDailog(true); // Open the dialog box
  }

  useEffect(() => {
    fetchTodoList();
  }, []);

  console.log(todoList?.todos?.length, "totodlist------");

  return (
    <div className="todoList">
      {todoList?.todos?.length > 0
        ? todoList?.todos.map((todo) => {
            return <TodoItem eachItem={todo} fetchCurrentTodoDetails={fetchCurrentTodoDetails} />;
          })
        : null}
      <TodoDetail
        openDailog={openDailog}
        eachTodoDetails={eachTodoDetails}
        setOpenDailog={setOpenDailog}
      />
    </div>
  );
};

export default TodoList;
