import React from "react";
import { FaTimes } from "react-icons/fa";

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.map((tasks) => (
        <div
          className={`task ${tasks.reminder ? "reminder" : ""}`}
          key={tasks.id}
          onDoubleClick={() => onToggle(tasks.id)}
        >
          <h3>
            {tasks.text}
            <FaTimes
              style={{ color: "red", cursor: "pointer" }}
              onClick={() => onDelete(tasks.id)}
            />
          </h3>
          <p>{tasks.day}</p>
        </div>
      ))}
    </>
  );
};

export default Tasks;
