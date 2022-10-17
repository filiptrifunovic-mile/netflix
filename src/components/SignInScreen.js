import { useRef } from "react";
import "../css/SignInScreen.css";
import { auth } from "../utils/firebase";

function SignInScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  function register(e) {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((err) => alert(err.message));
  }

  function signIn(e) {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((err) => alert(err.message));
  }

  return (
    <div className="sign-up-screen">
      <form>
        <h1>Sign In</h1>
        <input type="email" placeholder="Email" ref={emailRef} />
        <input type="password" placeholder="password" ref={passwordRef} />
        <button type="submit" onClick={signIn}>
          Sign in
        </button>
        <h4>
          <span className="sign-up-screen-gray">New to Netflix? </span>{" "}
          <span className="sign-up-screen-link" onClick={register}>
            Sign up now.
          </span>{" "}
        </h4>
      </form>
    </div>
  );
}

export default SignInScreen;
