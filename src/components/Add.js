import React, { useState } from "react";
import { useHistory } from "react-router";
import "./add.css";
function Add({ addTask, taskLength }) {
  const history = useHistory();
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("1");
  const [date, setDate] = useState("");

  const handleSubmit = () => {
    let newPriority = Number(priority);
    let obj = { id: taskLength, task: task, priority: newPriority, date: date };
    addTask(obj);
    history.push("/");
  };
  const prioritySelect = (e) => {
    setPriority(e.target.value);
  };
  const dateSelect = (e) => {
    setDate(e.target.value);
  };
  const taskSelect = (e) => {
    setTask(e.target.value);
  };
  const cancelAdd = () => {
    history.push("/");
  };
  return (
    <div className="container">
      <h1>Add Task</h1>
      <div>
        <h5>Task Name</h5>
        <input
          type="text"
          onChange={taskSelect}
          class="form-control "
          placeholder="TaskName"
          aria-label="taskName"
        />
      </div>
      <div>
        <h5>Select Priority</h5>
        <select
          onChange={prioritySelect}
          class="form-select"
          aria-label="Default select example"
        >
          <option selected value="1">
            low
          </option>
          <option value="2">medium</option>
          <option value="3">high</option>
        </select>
      </div>
      <div>
        <h5>Start Date</h5>
        <input
          value={date}
          onChange={dateSelect}
          type="date"
          id="start"
          name="trip-start"
          min="2021-09-31"
          max="2030-12-31"
        />
      </div>
      <div>
        <button className="btn btn-primary" onClick={handleSubmit}>
          add
        </button>
        <button className="btn btn-danger" onClick={cancelAdd}>
          cancel
        </button>
      </div>
    </div>
  );
}
export default Add;
