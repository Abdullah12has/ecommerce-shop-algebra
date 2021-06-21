import React, { Component } from "react";
import "../styles/signin.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { signInWithGoogle } from "../firebase/firebase.setup";


export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  submitHandler = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  changeHandler = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
    console.log(value);
  };

  render() {
    return (
      <div className="loginMain">
        <form
          onSubmit={this.submitHandler}
          className="loginForm"
          noValidate
          autoComplete="on"
        >
          <h1>I already have an account</h1>
          <span className="subtitleLogin">
            Sign In with your email and password
          </span>
          <TextField
            value={this.state.email}
            onChange={this.changeHandler}
            className="logintf"
            id="standard-basic"
            label="Email"
            name='email'
          />
          <TextField
            onChange={this.changeHandler}
            className="logintf"
            label="Password"
            type="password"
            id="standard-password-input"
            label="Password"
            name='password'
            // value={this.state.password}
          />
          <div className="lbuttonGroup">
            <Button className="btn" variant="contained" color="secondary">
              Sign In
            </Button>
            <Button onClick={signInWithGoogle} className="btn2" variant="contained" color="primary">
              Sign In with Google
            </Button>
          </div>
        </form>

        <form className="loginForm" noValidate autoComplete="on">
          <h1>I do not have an account</h1>
          <span className="subtitleLogin">
            Sign Up with your email and password
          </span>
          <TextField
            className="logintf"
            id="standard-basic"
            label="Display Name"
          />
          <TextField className="logintf" id="standard-basic" label="Email" />
          <TextField
            className="logintf"
            label="Password"
            type="password"
            id="standard-password-input"
          />
          <TextField
            className="logintf"
            label="Confirm Password"
            type="password"
            id="standard-password-input"
          />
          <Button className="btn" variant="contained" color="secondary">
            Sign Up
          </Button>
        </form>
      </div>
    );
  }
}