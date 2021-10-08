import React from "react";
import "./edit.css";
import { useHistory, useLocation } from "react-router";
import { useEffect, useState } from "react/cjs/react.development";
export default function Edit({ editTask }) {
  const location = useLocation();
  const history = useHistory();
  const data = location.obj;
  const [task, setTask] = useState(data.task);
  const [date, setDate] = useState(data.date);
  const [priority, setPriority] = useState(data.priority);
  useEffect(function () {
    document.querySelector(`option[value='${priority}']`).setAttribute("selected", "selected");
  }, []);
  const submitEdit = () => {
    let obj = { id: data.id, task: task, date: date, priority: priority };
    editTask(obj);
    history.push("/");
  };

  return (
    <div className="editContainer">
      <div className="editMenu">
        <h2>Edit</h2>
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="form-control"
          placeholder={data.task}
        />
        <select
          class="form-select "
          onChange={(e) => setPriority(e.target.value)}
          aria-label="Default select example"
        >
          <option value="1">low</option>
          <option value="2">medium</option>
          <option value="3">high</option>
        </select>
        <input
          value={date}
          onChange={(e) => setDate(e.target.value)}
          type="date"
          id="start"
          name="trip-start"
          min="2021-09-31"
          max="2030-12-31"
        />
        <div className="editButtons">
          <button onClick={submitEdit} className="btn btn-warning">
            Edit
          </button>
          <button onClick={() => history.push("/")} className="btn btn-danger">
            cancel
          </button>
        </div>
      </div>
    </div>
  );
}
