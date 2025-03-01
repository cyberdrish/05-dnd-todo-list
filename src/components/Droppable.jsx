import React from "react";
import { useDroppable } from "@dnd-kit/core";

export function Droppable(props) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });
  const style = {
    // opacity: isOver ? 1 : 0.5,
    flex: 1,
    padding: 10,
    marginTop: "10px",
    // border: "red solid 1px",
    backgroundColor: "#f0efef",
    borderRadius: 12,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
}
