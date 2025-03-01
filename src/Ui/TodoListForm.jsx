import { useState } from "react";
import UnallocatedTasks from "./UnallocatedTasks";

function TodoListForm({ todos, setTodos }) {
  const [inputTask, setinputTask] = useState("");
  const handleAddTask = () => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: crypto.randomUUID(), text: inputTask, status: "" },
    ]);
    console.log(crypto.randomUUID());
    setinputTask("");
  };

  return (
    <div
      style={{
        padding: 10,
      }}
    >
      <h1>To Do List</h1>
      <form
        style={{
          display: "flex",
          gap: "10px",
          paddingBottom: 20,
        }}
        onSubmit={(e) => {
          e.preventDefault();
          handleAddTask();
        }}
      >
        <input
          type="text"
          value={inputTask}
          onChange={(e) => setinputTask(e.target.value)}
        />
        <button type="submit" style={{ paddingLeft: 10 }}>
          Add Task
        </button>
      </form>
      <UnallocatedTasks todos={todos} />
    </div>
  );
}

export default TodoListForm;
