import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from "../action";

const LoginInitialState = {
  loginSuccess: false,
  user: {},
};

const LoginMechanism = (state = LoginInitialState, action) => {
  console.log(state.user);
  switch (action.type) {
    case LOGIN:
      console.log("reducer: ", action);
      return Object.assign({}, state, {
        ...state,
        user: action.promise.data,
      });
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        ...state,
        loginSuccess: true,
      });
    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        ...state,
      });
    default:
      return state;
  }
};

export default LoginMechanism;
