import axios from "axios";
import { toast } from "react-toastify";
// import logger from "./loggingService";

axios.interceptors.response.use(null, (error) => {
  const unExpectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status <= 500;
  if (unExpectedError) {
    // logger.error(error);
    toast.error("An error occured :" + error.response.data);
    alert("An Unexpected error occured while deleting post" + error);
  }
});

//To avoid bidirectional dependency between httpService and authService
function setJwt(jwt) {
  axios.defaults.headers.common["x-auth-token"] = jwt;
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete,
  setJwt,
};
