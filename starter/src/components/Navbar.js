import { logout } from "../actions/authedUser";
import { Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";

const Navbar = ({ dispatch, authedUser }) => {
  const location = useLocation();
  const path = location.pathname;

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  return (
    <nav class="d-flex justify-content-between border-bottom">
      <ul class="nav">
        <li class="nav-item fw-bold">
          <Link
            to="/"
            className={"nav-text nav-link " + (path === "/" ? "active" : "")}
          >
            Home
          </Link>
        </li>
        <li class="nav-item fw-bold">
          <Link
            to="/leaderboard"
            className={
              "nav-text nav-link " + (path === "/leaderboard" ? "active" : "")
            }
          >
            Leaderboard
          </Link>
        </li>
        <li class="nav-item fw-bold">
          <Link
            to="/add"
            className={"nav-text nav-link " + (path === "/new" ? "active" : "")}
          >
            New
          </Link>
        </li>
      </ul>
      <div className="d-flex align-items-center">
        <img
          className="rounded-circle mb-2"
          src={authedUser.avatarURL}
          alt="image"
          width={30}
          height={30}
          aria-hidden
        ></img>
        <p className="fw-bold mx-1 my-0 user-id">{authedUser.id}</p>
        <button
          className="btn btn-light logout-btn"
          onClick={handleLogout}
          type="submit"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  authedUser,
});

export default connect(mapStateToProps)(Navbar);
