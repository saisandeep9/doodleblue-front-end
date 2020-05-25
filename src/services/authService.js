import http from "./httpService";
import jwtDecode from "jwt-decode";

const tokenKey = "token";
http.setJwt(getToken());

function loginUrl() {
    return process.env.REACT_APP_API_URL + "/auth";
}

export async function login(data) {
    const response = await http.post(loginUrl(), data);
    console.log(response);
    if (response && response.headers["x-auth-token"]) {
        const userToken = response.headers["x-auth-token"];
        localStorage.setItem(tokenKey, userToken);
        return true;
    } else {
        return false;
    }
}

// export function loginWithJWT(token) {
//   if (token) {
//     localStorage.setItem(tokenKey, token);
//     return true;
//   } else {
//     return false;
//   }
// }

export function getCurrentUser() {
    try {
        const jwt = localStorage.getItem(tokenKey);
        const user = jwtDecode(jwt);
        return user;
    } catch (error) {
        return null;
    }
}

export function getToken() {
    return localStorage.getItem(tokenKey);
}

export function logout() {
    localStorage.removeItem(tokenKey);
}

export default {
    login,
    //   loginWithJWT,
    getCurrentUser,
    getToken,
    logout,
};