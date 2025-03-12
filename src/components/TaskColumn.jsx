import { Draggable } from "./Draggable";
import { Droppable } from "./Droppable";

var h2Style = (backgroundcolor) => ({
  backgroundColor: backgroundcolor ? backgroundcolor : "red",
  border: "none",
  paddingTop: "none",
  borderRadius: "12px 12px 0px 0px",
  margin: 0, // Removes the default margin
  padding: 10, // Removes the default padding
});

function TaskColumn({ todos, title, dropID, backgroundcolor }) {
  return (
    <div
      style={{
        textAlign: "center",
        border: "lightgray solid 1px",
        borderRadius: 12,
        display: "flex",
        flexDirection: "column",
        flex: 1,
      }}
    >
      <h2 style={h2Style(backgroundcolor)}>{title}</h2>
      <Droppable id={dropID}>
        {todos.filter((task) => task && task.status === `${dropID}`).length ===
        0 ? (
          <h3
            style={{
              fontStyle: "italic",
              color: "gray",
            }}
          >
            {`No '${title}' tasks`}
          </h3>
        ) : (
          todos
            .filter((task) => task && task.status === `${dropID}`)
            .map((task) => (
              <Draggable key={task.id} id={task.id}>
                {task.text}
              </Draggable>
            ))
        )}
      </Droppable>
    </div>
  );
}

export default TaskColumn;
