import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    getTasks().catch(console.error);
  }, []);

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    return data;
  };

  const [showAddTask, setShowAddTask] = useState(false);
  const [btnColor, setBtnColor] = useState("");

  const addTask = (task) => {
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
  };

  return (
    <div className="container">
      <Header
        title={"Task Tracker"}
        onAdd={() => setShowAddTask(!showAddTask)}
        btncolor={btnColor}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask addTask={addTask} />}
      {tasks?.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks"
      )}
    </div>
  );
}

export default App;
