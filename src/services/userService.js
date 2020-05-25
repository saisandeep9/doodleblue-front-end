import http from "./httpService";

function userUrl() {
  return process.env.REACT_APP_API_URL + "/users";
}

function profileUrl() {
  return process.env.REACT_APP_API_URL + "/me";
}
export function register(user) {
  return http.post(userUrl(), user);
}

export function getusers() {
  return http.get(userUrl());
}

export function getprofile() {
  return http.get(profileUrl());
}
