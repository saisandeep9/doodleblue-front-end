import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import NavBar from "./components/navBar";
import Signup from "./components/users/signup";
import Logout from "./components/users/logout";
import Login from "./components/users/login";
import auth from "./services/authService";
import Task from "./components/tasks";
import UpdateTask from "./components/updateTask";
import CreateTask from "./components/createTask";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  state = { user: {} };

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
    return (
      <div>
        <ToastContainer />
        <NavBar user={this.state.user} />

        <Switch>
          {this.state.user && (
            <>
              <Route
                path="/task"
                exact
                render={(props) => <Task {...props} user={this.state.user} />}
              />
              <Route path="/createtask" exact component={CreateTask} />
              <Route path="/update/:id" exact component={UpdateTask} />
              <Route path="/logout" exact component={Logout} />
            </>
          )}
          <Route path="/signup" exact component={Signup} />

          <Route path="/" exact component={Login} />
        </Switch>
      </div>
    );
  }
}

export default App;
