import React, { Component } from "react";
import { connect } from "react-redux";

class LoginSuccess extends Component {
  render() {
    return <div>HELLO? {this.props.Inputed_id}</div>;
  }
}

let mapStateToProps = (state) => {
  return {
    Inputed_id: state.LoginMechanism,
  };
};

LoginSuccess = connect(mapStateToProps)(LoginSuccess);

export default LoginSuccess;
