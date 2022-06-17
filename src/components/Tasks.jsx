import React from "react";
// import Task from "./Task";
import { FaTimes } from "react-icons/fa";

const Tasks = ({ tasks, onDelete }) => {
  return (
    <>
      {tasks.map((tasks) => (
        <div className="task" key={tasks.id}>
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
