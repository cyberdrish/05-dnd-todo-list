import { useState } from "react";
import UnallocatedTasks from "./UnallocatedTasks";

function TodoListForm({ todos, onAddTodo }) {
  const [inputText, setinputText] = useState("");

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
          onAddTodo(inputText, setinputText);
        }}
      >
        <input
          type="text"
          value={inputText}
          onChange={(e) => setinputText(e.target.value)}
          required
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
