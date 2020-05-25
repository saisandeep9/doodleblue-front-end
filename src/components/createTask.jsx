import React from "react";
import Validation from "../components/common/validation";

import Input from "../components/common/Input";
import Joi from "joi-browser";
import * as taskService from "../services/taskService";

class CreateTask extends Validation {
  state = {
    data: {
      taskName: "",
    },
    errors: {},
  };

  schema = {
    taskName: Joi.string().required().min(6),
  };

  doSubmit = async () => {
    console.log(this.state.data);
    const success = await taskService.createTask(this.state.data);

    if (success) {
      window.location = "/task";
      // this.props.history.push("/task");
    }
  };

  render() {
    const { data, errors } = this.state;

    return (
      <div className="container m-3">
        <form
          onSubmit={this.handleSubmit}
          className="p-3 box "
          style={{ width: "300px" }}
        >
          <h1 className="text-center"> Create Task</h1>
          <Input
            name="taskName"
            label="Task Name"
            type="text"
            value={data.name}
            placeholder="Enter the Task Name"
            className="form-control "
            autoFocus="true"
            onChange={this.handleChange}
            error={errors.name}
            // className=""
          />

          <center>
            <button
              type="submit"
              className=" btn btn-primary  btn-block mb-3 mt-2"
            >
              Sign up
            </button>
          </center>
        </form>
      </div>
    );
  }
}

export default CreateTask;
