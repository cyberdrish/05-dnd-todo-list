import { Draggable } from "../components/Draggable";

function UnallocatedTasks({ todos }) {
  const unallocatedTask = todos.filter((task) => task && task.status === "");
  return (
    <div
      style={{
        display: "flex",
        gap: 2,
      }}
    >
      <div>
        <h3>Unallocated tasks Status</h3>
        {unallocatedTask.length === 0 ? (
          <h3
            style={{
              fontStyle: "italic",
              color: "gray",
            }}
          >
            No unallocated tasks 🎉
          </h3>
        ) : (
          unallocatedTask.map((task) => (
            <Draggable key={task.id} id={task.id}>
              {task.text}
            </Draggable>
          ))
        )}
      </div>
    </div>
  );
}

export default UnallocatedTasks;
