import React, { useEffect } from "react";
import { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
export default function Todo({ taskList, editTask, deleteTask }) {
  const [task, setTask] = useState("");
  const [sort, setSort] = useState(0);
  let allTask = [];
  const taskSearch = (e) => {
    setTask(e.target.value);
  };
  useEffect(() => {
    allTask = [...taskList];
  }, []);
  if (task == "") {
    allTask = [...taskList];
  } else {
    allTask = taskList.filter((obj) => {
      return obj.task.toLowerCase().includes(task);
    });
  }

  useEffect(() => {
    if (sort < 0) {
      allTask = taskList.sort((a, b) => {
        return b.priority - a.priority;
      });
    } else {
      allTask = taskList.sort((a, b) => {
        console.log(a.task + a.priority + " " + b.task + b.priority);
        return a.priority - b.priority;
      });
    }
  }, [sort]);
  return (
    <div className="Todo">
      <div className="addButton">
        <Link to="/add">
          <button id="addBtn">Add +</button>
        </Link>
      </div>
      <input
        type="text"
        value={task}
        className="form-control search"
        placeholder="search"
        onChange={taskSearch}
      />

      <table class="table ">
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th className="col-md-4 taskCol" scope="col">
              Task
            </th>
            <th scope="col">
              <button onClick={() => setSort(-1)} className="btn priorityBtn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-caret-down-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
              </button>
              priority
              <button className="btn priorityBtn" onClick={() => setSort(1)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-caret-up-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                </svg>
              </button>
            </th>
            <th scope="col">date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {allTask.map((obj, index) => {
            let id = obj.id;
            console.log(obj);
            let priority =
              obj.priority == 1 ? "low" : obj.priority == 2 ? "medium" : "high";
            return (
              <tr key={id}>
                <th scope="row">{index + 1}</th>
                <td>{obj.task}</td>
                <td>{priority}</td>
                <td>{obj.date}</td>
                <td>
                  <Link to={{ pathname: "/edit", obj: obj }}>
                    <button
                      onClick={editTask}
                      className="btn btn-warning actionBtn"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-pencil-square"
                        viewBox="0 0 16 16"
                      >
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path
                          fill-rule="evenodd"
                          d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                        />
                      </svg>
                    </button>
                  </Link>
                  <button
                    onClick={() => deleteTask(id)}
                    className="btn btn-danger actionBtn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-trash-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                    </svg>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    // </div>
  );
}

