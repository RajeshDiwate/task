import React, { useEffect, useState } from "react";
import axios from "axios";
const API_URL = "http://localhost:5000/tasks";

const APP = () => {
  const [tasks, setTasks] = useState([]);
  const [newtasks, setNewTasks] = useState("");

  useEffect(() => {
    axios.get(API_URL).then((res) => {
      setTasks(res.data);
    });
  }, []);

  const addtask = () => {
    axios
      .post(API_URL, {
        text: newtasks,
      })
      .then((res) => {
        setTasks([...tasks, res.data]);
        setNewTasks("");
      });
  };
  const deletetask = () => {};

  return (
    <>
      <div>Tasks List</div>
      <input
        type="text"
        value={newtasks}
        onChange={(e) => setNewTasks(e.target.value)}
        placeholder="Enter task details"
      />
      <button onClick={addtask}>Add task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
    </>
  );
};
export default APP;
