import React from "react";

export default function LoginView(props) {
  return (
    <div>
      <div>Log In</div>
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
      <button onClick={() => props.handleLoginSubmit()}>Log In</button>
      Don't have an account?{" "}
      <span onClick={() => props.toggleLoginView()}>Sign Up!</span>
    </div>
  );
}
