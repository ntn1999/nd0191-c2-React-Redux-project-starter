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
import { useNavigate } from "react-router-dom";
import "../css/App.css";
import PageNotFound from "./PageNotFound";

const App = (props) => {
  const navigate = useNavigate();
  const { authedUser } = props;

  useEffect(() => {
    props.dispatch(handleInitialData());
    if (authedUser == null) {
      navigate("/login");
    }
  }, []);

  return (
    <Fragment>
      <LoadingBar />
      <div className="container">
        {authedUser && <Navbar />}
        <Routes>
          <Route path="/login" exact element={<LoginPage />} />
          <Route path="/" exact element={<Dashboard />} />
          <Route path="/questions/:id" exact element={<PollPage />} />
          <Route path="/add" exact element={<PollCreation />} />
          <Route path="/leaderboard" exact element={<Leaderboard />} />
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
