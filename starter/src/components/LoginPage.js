import { useState } from "react";
import { login } from "../actions/authedUser";
import { connect } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const LoginPage = ({ dispatch }) => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const { state } = useLocation();
  const navigate = useNavigate();

  const changeUsername = (e) => {
    const value = e.target.value;
    setUsername(value);
  };

  const changePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      dispatch(login(username, password));
      setUsername("");
      setPassword("");
      navigate(state?.from?.pathname || "/");
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-heading">Employee Polls</h2>
      <img
        className="rounded-circle"
        width={300}
        height={300}
        aria-hidden
        src="https://cdn.vectorstock.com/i/1000x1000/35/88/male-persons-icons-vector-4783588.webp"
        alt="image"
      ></img>
      <div className="login">
        <h4 className="login-title">Log In</h4>
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="text-center col-12">
            <label className="form-label px-3">User</label>
            <input
              type="text"
              placeholder="User"
              id="username"
              value={username}
              className="form-control"
              onChange={changeUsername}
              data-testid="user"
            />
          </div>
          <div className="text-center col-12">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              placeholder="Password"
              onChange={changePassword}
              data-testid="password"
            />
          </div>
          <button
            type="submit"
            className="btn btn-secondary text-center col-2 login-btn"
            disabled={!(username && password)}
            data-testid="login-button"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default connect()(LoginPage);
