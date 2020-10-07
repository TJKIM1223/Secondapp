import axios from "axios";
import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { green, purple } from "@material-ui/core/colors";
import { Redirect } from "react-router-dom";
import { login } from "../action";
import { connect } from "react-redux";
import "../reducer/index";

const BaseURL1 = "http://10.1.1.153:5000";
const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700],
    },
  },
}))(Button);
const Styles = (theme) => ({
  AppScreen: {
    textAlign: "center",
  },
  text: {
    width: 500,
    height: 50,
    fontSize: 25,
    marginBottom: 20,
  },
  margin: {
    marginLeft: theme.spacing(40),
  },
});
class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      Password: "",
      rst: 0,
    };
    this.onChangeID = this.onChangeID.bind(this);
    this.onChangePW = this.onChangePW.bind(this);
  }

  onChangeID(e) {
    this.setState({ id: e.currentTarget.value });
  }
  onChangePW(e) {
    this.setState({ Password: e.currentTarget.value });
  }
  onButtonClick = (e) => {
    let param = {};
    param.url = "/login";
    param.method = "post";
    param.data = {
      id: this.state.id,
      password: this.state.Password,
    };
    this.httpRequest(param);
    console.log("Param: ", param.data.id);
    console.log("Param: ", param.data.password);
    this.props.updateLogin(param.data.id, param.data.password);
  };

  httpRequest(param) {
    let rst = {};
    axios.defaults.baseURL = BaseURL1;
    let promise = axios({
      method: param.method,
      url: param.url,
      data: param.data,
    });
    promise.then((response) => {
      console.log("Success! ", param.data, response);
      rst = response.data;
      this.setState({
        rst: rst.result,
      });
    });
    promise.catch((response) => {
      console.log("Error! ", response);
    });
  }
  //click 시 id/pw 확인
  render() {
    const { classes } = this.props;

    if (this.state.rst === 1) {
      return <Redirect to="/LoginSuccess" />;
    } else {
      return (
        <div className={classes.AppScreen}>
          <h1>Sign in</h1>
          <input
            type="id"
            className={classes.text}
            onChange={this.onChangeID}
            value={this.state.id}
            placeholder="Id"
          />
          <br />
          <input
            type="password"
            className={classes.text}
            onChange={this.onChangePW}
            value={this.state.Password}
            placeholder="Password"
          />
          <br />
          <ColorButton
            variant="contained"
            color="primary"
            className={classes.margin}
            onClick={this.onButtonClick}
          >
            Sign in
          </ColorButton>
        </div>
      );
    }
  }
}

let mapDispatchtoProps = (dispatch) => ({
  updateLogin: (id, Password) => dispatch(login(id, Password)),
});
LoginScreen = connect(undefined, mapDispatchtoProps)(LoginScreen);

export default withStyles(Styles)(LoginScreen);
