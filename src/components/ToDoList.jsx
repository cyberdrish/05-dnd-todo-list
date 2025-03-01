import { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import { Droppable } from "./Droppable";
import TaskColumn from "../Ui/TaskColumn";
import TodoListForm from "../Ui/TodoListForm";

const ToDoList = ({ todosI }) => {
  const [todos, setTodos] = useState(todosI);
  const [deleteMessage, setDeleteMessage] = useState("");

  function handleDragEnd(e) {
    if (e.over && e.over.id === "delete") {
      if (window.confirm("Are you sure you want to delete this task?")) {
        setTodos((prevTodos) =>
          prevTodos.filter((task) => task.id !== e.active.id)
        );
        setDeleteMessage("Task deleted successfully! 🗑️");
        setTimeout(() => setDeleteMessage(""), 2000);
      }
    } else {
      setTodos((prevTasks) =>
        prevTasks.map((task) =>
          task.id === e.active.id
            ? { ...task, status: e.over ? e.over.id : "" }
            : task
        )
      );
    }
  }

  return (
    <DndContext onDragEnd={(e) => handleDragEnd(e)}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gridTemplateRows: "1fr 1fr 1fr",
          maxHeight: "99vh",
        }}
      >
        <TodoListForm todos={todos} setTodos={setTodos} />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "1rem",
          }}
        >
          <TaskColumn
            todos={todos}
            title="To Do"
            dropID="to-do"
            backgroundcolor="#F4E688"
          />
          <TaskColumn
            todos={todos}
            title="In Progress"
            dropID="in-progress"
            backgroundcolor="#88F48E"
          />
          <TaskColumn
            todos={todos}
            title="Done"
            dropID="done"
            backgroundcolor="#88E2F4"
          />
        </div>
        <div>
          {deleteMessage && (
            <div
              style={{ color: "red", textAlign: "center", marginTop: "10px" }}
            >
              {deleteMessage}
            </div>
          )}
          <div
            style={{
              alignItems: "center",
              width: "auto",
              margin: "0% 40% 0% 40%",
            }}
          >
            <Droppable id="delete">❌🗑️❌</Droppable>
          </div>
        </div>
      </div>
    </DndContext>
  );
};

export default ToDoList;
