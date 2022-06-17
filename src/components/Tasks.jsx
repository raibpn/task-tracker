import React from "react";
const tasks = [
  {
    id: 1,
    text: "Doctors Appointment",
    day: "Feb 5th at 2:30 pm",
    reminder: true,
  },
  {
    id: 2,
    text: "Meet Numa Rani",
    day: "Feb 14th at 10 am",
    reminder: true,
  },
  {
    id: 3,
    text: "Go to Meeting",
    day: "Feb 5th at 9:30 am",
    reminder: true,
  },
  {
    id: 4,
    text: "Go to Movie",
    day: "Feb 10th at 2:30 pm",
    reminder: true,
  },
  {
    id: 5,
    text: "Go to Walk",
    day: "Feb 10th at 6:30 pm",
    reminder: false,
  },
];
const Tasks = () => {
  return (
    <>
      {tasks.map((tasks) => (
        <h3 key={tasks.id}>{tasks.text}</h3>
      ))}
    </>
  );
};

export default Tasks;
