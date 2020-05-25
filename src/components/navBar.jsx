import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = ({ user }) => {
  return (
    <div>
      <nav className="navbar navbar-dark  navbar-expand-sm App-nav bg-dark">
        <ul className="navbar-nav    ">
          {user && (
            <>
              <li className="nav-item ">
                <NavLink className="nav-link " to="/createtask">
                  <i className="fa "> Create Task</i>
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink to={"/task"} className="  nav-link">
                  <i className="fa "> Task</i>

                  {/* <span className="sr-only">(current)</span> */}
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink className="nav-link " to="/logout">
                  <i className="fa "> Logout</i>
                </NavLink>
              </li>
            </>
          )}
          {!user && (
            <>
              <li className="nav-item ">
                <NavLink className="nav-link " to="/signup">
                  <i className="fa fa-sign-in"> Sign up</i>
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink className="nav-link " to="/">
                  <i className="fa "> Log in</i>
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
