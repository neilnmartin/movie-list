import React from "react";

export default function LoginView(props) {
  return (
    <div>
      <div>Log In</div>
      <form>
        Username: <input name="username" onChange={e => props.handleInput(e)} />{" "}
        <br />
        Password:{" "}
        <input
          name="password"
          type="password"
          onChange={e => props.handleInput(e)}
        />
        <button>Log In</button>
      </form>
      Don't have an account?{" "}
      <span onClick={() => props.toggleLoginView()}>Sign Up!</span>
    </div>
  );
}
