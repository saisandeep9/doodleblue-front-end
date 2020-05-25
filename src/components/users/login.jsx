import React from "react";
import Validation from "../common/validation";

import auth from "../../services/authService";
import Input from "../common/Input";
import Joi from "joi-browser";

class Login extends Validation {
  state = {
    data: {
      email: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    email: Joi.string().required(),
    password: Joi.string().required().min(8),
  };

  doSubmit = async () => {
    // console.log(this.state.data);
    const { data } = this.state;
    const success = await auth.login(data);
    console.log("data", success);
    if (success) {
      window.location = "/task";
      // this.props.history.push("/task");
    }
  };

  render() {
    const { data, errors } = this.state;

    return (
      <div>
        <div className="row m-5">
          <div className="col-8 text-center">
            <h2 className="">welcome doodleblue website</h2>
          </div>

          <div className="col-4">
            <div
              className="container  box  float-right "
              // style={{ width: "0%" }}
            >
              <form onSubmit={this.handleSubmit}>
                <h1 className="text-center"> Login</h1>

                <Input
                  name="email"
                  label="Email"
                  type="text"
                  value={data.email}
                  placeholder="Enter email"
                  className="form-control "
                  onChange={this.handleChange}
                  error={errors.email}
                />

                <Input
                  name="password"
                  label="Password"
                  type="password"
                  value={data.password}
                  placeholder="Password"
                  className="form-control "
                  onChange={this.handleChange}
                  error={errors.password}
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
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
