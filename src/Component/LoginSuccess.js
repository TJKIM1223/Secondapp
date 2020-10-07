import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Button from "@material-ui/core/Button";

class LoginSuccess extends Component {
  render() {
    if (this.props.login_ok == false) {
      return <Redirect to="/" />;
    } else if (this.props.login_ok == true) {
      return (
        <div>
          <h2>
            HELLO? "{this.props.LoginMechanism.id} ,
            {this.props.LoginMechanism.Password}"
          </h2>
          <Button variant="contained">Logout</Button>
        </div>
      );
    }
  }
}

let mapStateToProps = (state) => {
  console.log("state: ", state);
  return {
    LoginMechanism: state.user,
    login_ok: state.loginSuccess,
  };
};

LoginSuccess = connect(mapStateToProps)(LoginSuccess);

export default LoginSuccess;
