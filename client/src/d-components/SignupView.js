import React from "react";

export default function SignupView(props) {
  return (
    <div>
      <div>Sign Up</div>
      <form>
        Username: <input name="username" onChange={e => props.handleInput(e)} />{" "}
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
        <button>Sign Up</button>
      </form>
      Already have an account?{" "}
      <span onClick={() => props.toggleLoginView()}>Log In!</span>
    </div>
  );
}
