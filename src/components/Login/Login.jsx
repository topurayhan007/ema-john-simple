import React, { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Login.css";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
  const [show, setShow] = useState(false);

  const [error, setError] = useState("");
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from.pathname || "/";

  const handleSignIn = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // console.log(email, password, confirm);
    setError("");

    if (password.length < 6) {
      setError("Password must be 6 characters or longer");
      return;
    }

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        // setUser(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Login</h2>
      <form onSubmit={handleSignIn}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required id="" />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type={show ? "text" : "password"}
            name="password"
            required
            id=""
          />
          <p onClick={setShow(!show)}>
            <small>
              {show ? <span>Hide Password</span> : <span>Show password</span>}
            </small>
          </p>
        </div>
        <p className="text-error">{error}</p>

        <input className="btn-submit" type="submit" value="Login" />
      </form>
      <p>
        <small>
          New to Ema-John?{" "}
          <Link to="/signup" className="sub-title">
            Create New Account
          </Link>
        </small>
      </p>
    </div>
  );
};

export default Login;
