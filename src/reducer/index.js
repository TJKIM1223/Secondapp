import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from "../action";

const LoginInitialState = {
  user: {},
};

const LoginMechanism = (state = LoginInitialState, action) => {
  console.log(state.user);
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, {
        ...state,
        user: action.result,
      });
    default:
      return state;
  }
};

export default LoginMechanism;
