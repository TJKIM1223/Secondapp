export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT";

export function login(id, Password) {
  console.log("Action: ", id, Password);
  return {
    type: LOGIN,
    promise: { method: "post", url: "/login", data: { id, Password } },
  };
}
export function loginSuccess() {
  return {
    type: LOGIN_SUCCESS,
  };
}

export function loginFailure() {
  return {
    type: LOGIN_FAILURE,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}
