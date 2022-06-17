import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
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
  ]);

  const addTask = (task) => {
    // console.log("task created is:" + JSON.stringify(task));
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((tasks) => tasks.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((tasks) =>
        tasks.id === id ? { ...tasks, reminder: !tasks.reminder } : tasks
      )
    );
    console.log("tasks:" + JSON.stringify(tasks));
  };

  return (
    <div className="container">
      <Header title={"Task Tracker"} />
      <AddTask addTask={addTask} />
      {tasks?.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks"
      )}
    </div>
  );
}

export default App;
