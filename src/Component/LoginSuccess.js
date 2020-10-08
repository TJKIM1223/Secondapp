import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { logout } from "../action";
import Button from "@material-ui/core/Button";

class LoginSuccess extends Component {
  onButtonClick = (e) => {
    console.log("LOGOUT: ");
    this.props.logout();
    localStorage.removeItem("id");
    localStorage.removeItem("Password");
    localStorage.removeItem("login_ok");
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("Password");
    sessionStorage.removeItem("login_ok");
  };
  render() {
    const loginState = sessionStorage.getItem("login_ok");
    if (loginState === "0") {
      return <Redirect to="/" />;
    } else if (loginState === "1") {
      return (
        <div>
          <h2>
            HELLO? "{sessionStorage.getItem("id")} ,
            {sessionStorage.getItem("Password")}"
          </h2>
          <Button variant="contained" onClick={this.onButtonClick}>
            Logout
          </Button>
        </div>
      );
    } else {
      alert("Please login!");
      return <Redirect to="/" />;
    }
  }
}

let mapStateToProps = (state) => {
  console.log("state: ", state);
  return {
    LoginAccount: state.user,
    login_ok: state.loginSuccess,
  };
};

let mapDispatchtoProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

LoginSuccess = connect(mapStateToProps, mapDispatchtoProps)(LoginSuccess);

export default LoginSuccess;
