import React from "react";

export default function SignupView(props) {
  return (
    <div>
      <div>Sign Up</div>
      Username: <input
        name="username"
        onChange={e => props.handleInput(e)}
      />{" "}
      <br />
      Password:{" "}
      <input
        name="password"
        type="password"
        onChange={e => props.handleInput(e)}
      />
      <br />
      Verify Password:{" "}
      <input
        name="verifypassword"
        type="password"
        onChange={e => props.handleInput(e)}
      />
      <br />
      <p>
        {props.matchpassword ? "Password verified" : "Passwords do not match"}
      </p>
      <button onClick={() => props.handleSS()}>Sign Up</button>
      Already have an account?{" "}
      <span onClick={() => props.toggleLoginView()}>Log In!</span>
    </div>
  );
}
