import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as taskService from "../services/taskService";
import { toast } from "react-toastify";

class Task extends Component {
  state = {
    tasks: [],
  };

  async componentDidMount() {
    const success = await taskService.gettasks();
    this.setState({ tasks: success.data });
    console.log("get ", success.data);
  }

  onDelete = async (taskToDelete) => {
    console.log("onDelete", taskToDelete);
    const actualTasks = this.state.tasks;

    const filteredTasks = actualTasks.filter(
      (task) => task._id !== taskToDelete._id
    );

    this.setState({ tasks: filteredTasks });

    const response = await taskService.deleteTask(taskToDelete._id);
    if (response && response.status === 200) {
      toast.success(`Successfully deleted ${taskToDelete.taskName}.`);
    } else {
      this.setState({ tasks: actualTasks });
    }
  };

  render() {
    console.log("get ", this.state.tasks);
    const user = this.props;
    console.log("user ", user.user.name);
    return (
      <div className="container mt-3 box w-40">
        <h1>This is Task page </h1>
        <table className="table">
          <thead className="App-nav">
            <tr>
              <th>Task Name</th>
              <th>User Name</th>
              <th>Entry Time</th>
              <th>Edit Time</th>
              <th>Expiry</th>
              <th>Task</th>
            </tr>
          </thead>
          <tbody>
            {this.state.tasks.map((task) => (
              <tr key={task._id}>
                <td>{task.taskName}</td>
                <td>{task.userName}</td>
                <td>{task.entryTime}</td>
                <td>{task.editTime}</td>
                <td>{task.expiry}</td>
                <td>
                  {user.user.name === task.userName && (
                    <>
                      <button
                        onClick={() => this.onDelete(task)}
                        className="btn btn-danger m-2"
                      >
                        x
                      </button>
                      <Link to={{ pathname: `/update/${task._id}` }}>
                        <button
                          // onClick={() => this.onDelete(task)}
                          className="btn btn-danger m-2"
                        >
                          Update
                        </button>
                      </Link>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Task;
