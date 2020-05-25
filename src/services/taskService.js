import http from "./httpService";

function taskUrl(id) {
  return process.env.REACT_APP_API_URL + "/tasks" + (id ? "/" + id : "");
}

export function gettasks() {
  return http.get(taskUrl());
}

export function deleteTask(id) {
  return http.delete(taskUrl(id));
}

export function getTaskWithId(id) {
  return http.get(taskUrl(id));
}

export function updatetask(id, taskName) {
  return http.put(taskUrl(id), { taskName });
}

export function createTask(data) {
  return http.post(taskUrl(), data);
}
