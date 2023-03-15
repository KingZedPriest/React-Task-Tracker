import { useState } from "react";
import Header from "./components/Header"; 
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState ([
    {
      id: 1,
      text: "Investment Website",
      day: "Feb 17th at 10:00pm",
      reminder: "true",
    },
    {
      id: 2,
      text: "Portfolio Website",
      day: "Feb 17th at 10:05pm",
      reminder: "true",
    },
    {
      id: 3,
      text: "Creditcard Marketplace",
      day: "Feb 17th at 10:10pm",
      reminder: "false",
    },
  ]);
  return (
    <div className="container">
      <Header />
      <Tasks tasks ={tasks} />
    </div>
  );
}

export default App;
