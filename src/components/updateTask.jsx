import React from "react";

import Validation from "../components/common/validation";
import Input from "../components/common/Input";
import Joi from "joi-browser";
import * as taskService from "../services/taskService";
import { toast } from "react-toastify";

class UpdateTask extends Validation {
  state = {
    data: {
      taskName: "",
    },
    errors: {},
  };

  schema = {
    taskName: Joi.string().required().min(8),
  };

  async componentDidMount() {
    const response = await taskService.getTaskWithId(
      this.props.match.params.id
    );

    // if (!response) return this.props.history.replace("/not-found");
    const { data: task } = response;
    console.log("task", task);

    const data = { ...this.state.data };
    console.log("data2", data);
    data.taskName = task.taskName;

    this.setState({ data });
  }

  doSubmit = async () => {
    console.log(this.state.data);
    const data = { id: this.props.match.params.id, ...this.state.data };

    const response = await taskService.updatetask(data.id, data.taskName);
    if (response.status === 200) {
      toast.success("Successfully updated task");
      this.props.history.push("/task");
    }
  };

  render() {
    const { data, errors } = this.state;

    console.log("path", this.props.match);
    console.log("path", this.props.match.params.id);
    return (
      <div className="container m-3">
        <form
          onSubmit={this.handleSubmit}
          className="p-3 box "
          style={{ width: "400px" }}
        >
          <h1 className="text-center"> Update Task</h1>
          <Input
            name="taskName"
            label="Task Name"
            type="text"
            value={data.taskName}
            placeholder="Enter Name"
            className="form-control "
            autoFocus="true"
            onChange={this.handleChange}
            error={errors.taskName}
          />

          <center>
            <button
              type="submit"
              className=" btn btn-primary  btn-block mb-3 mt-2"
            >
              Update
            </button>
          </center>
        </form>
      </div>
    );
  }
}

export default UpdateTask;
