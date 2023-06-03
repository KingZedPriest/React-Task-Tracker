import { useState, useEffect } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAddBtn, setShowAddBtn] = useState(false);
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  // Fetch Task from local JSON
  const fetchTasks = async () => {
    const response = await fetch("http://localhost:5000/tasks");
    const data = await response.json();
    return data;
  };

  // Add Task
  const addTask = async (task) => {
    const response = await fetch(`http://localhost:5000/tasks`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(task),
    });
    const data = await response.json()
    setTasks([...tasks, data]);

    // const id = Math.floor(Math.random() * 1000) + 1;
    // const newTask = { id, ...task };
    // setTasks([...tasks, newTask]);
  };

  //Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: "DELETE" });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Fetch Task
  const fetchTask = async (id) => {
    const response = await fetch(`http://localhost:5000/task/${id}`);
    const data = await response.json();
    return data;
  };

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  // Show the add form
  const show = () => {
    setShowAddBtn(!showAddBtn);
  };
  return (
    <div className="container">
      <Header show={show} showStatus={showAddBtn} />
      {showAddBtn && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "You Don't Have Any Tasks."
      )}
    </div>
  );
}

export default App;
