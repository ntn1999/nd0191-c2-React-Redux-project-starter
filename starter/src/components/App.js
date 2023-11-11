import { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import LoadingBar from "react-redux-loading-bar";
import Leaderboard from "./Leaderboard";
import LoginPage from "./LoginPage";
import PollPage from "./PollPage";
import PollCreation from "./PollCreation";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import { Navigate, useLocation } from "react-router-dom";
import "../css/App.css";
import PageNotFound from "./PageNotFound";

const LoginRoute = ({ children, authedUser }) => {
  const location = useLocation();
  if (!authedUser) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return children;
};

const App = (props) => {
  const { authedUser } = props;
  const location = useLocation();
  console.log(location.pathname, "aaaaaaaaaaaaa");

  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return (
    <Fragment>
      <LoadingBar />
      <div className="container">
        {authedUser && location.pathname !== "/pagenotfound" && <Navbar />}
        <Routes>
          <Route path="/login" exact element={<LoginPage />} />
          <Route
            path="/"
            exact
            element={
              <LoginRoute authedUser={props.authedUser}>
                <Dashboard />
              </LoginRoute>
            }
          />
          <Route
            path="/questions/:id"
            exact
            element={
              <LoginRoute authedUser={props.authedUser}>
                <PollPage />
              </LoginRoute>
            }
          />
          <Route
            path="/add"
            exact
            element={
              <LoginRoute authedUser={props.authedUser}>
                <PollCreation />
              </LoginRoute>
            }
          />
          <Route
            path="/leaderboard"
            exact
            element={
              <LoginRoute authedUser={props.authedUser}>
                <Leaderboard />
              </LoginRoute>
            }
          />
          <Route path="*" exact element={<PageNotFound />} />
        </Routes>
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  authedUser,
});

export default connect(mapStateToProps)(App);
