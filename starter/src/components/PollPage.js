import { connect } from "react-redux";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { submitQuestionAnswer } from "../actions/questions";

const PollPage = ({ questions, users, dispatch, authedUser }) => {
  const { id } = useParams();
  const question = Object.values(questions).find(
    (question) => question.id === id
  );
  let initialOption;
  if (question.optionOne.votes.includes(authedUser.id)) {
    initialOption = "optionOne";
  }
  if (question.optionTwo.votes.includes(authedUser.id)) {
    initialOption = "optionTwo";
  }
  const [optionSelected, setOptionSelected] = useState(initialOption);

  const navigate = useNavigate();
  if (!question) {
    navigate("/pagenotfound");
    return;
  }

  const avatarURL = users[question.author].avatarURL;

  const handleChooseOptionOne = (e) => {
    e.preventDefault();
    if (!optionSelected) {
      setOptionSelected("optionOne");
      dispatch(submitQuestionAnswer("optionOne", question.id)).then(() => {
        navigate("/");
      });
    }
  };

  const handleChooseOptionTwo = (e) => {
    e.preventDefault();
    if (!optionSelected) {
      setOptionSelected("optionTwo");
      dispatch(submitQuestionAnswer("optionTwo", question.id)).then(() => {
        navigate("/");
      });
    }
  };

  const handlePercentageOption = (option) => {
    const amountOption1 = question.optionOne.votes.length;
    const amountOption2 = question.optionTwo.votes.length;
    const total = amountOption1 + amountOption2;
    if (option === "optionOne") {
      return `${((amountOption1 / total) * 100).toFixed(1)}%`;
    } else {
      return `${((amountOption2 / total) * 100).toFixed(1)}%`;
    }
  };

  return (
    <div className="mt-3 container text-center">
      <h3 className="mb-5">Poll by {question.author}</h3>
      <img
        src={avatarURL}
        alt="image"
        width={250}
        height={250}
        aria-hidden
        className="rounded-circle"
      ></img>
      <h4 className="mt-4">Would You Rather</h4>
      <div className="row">
        <div className="col-6 justify-content-center d-flex">
          <div className="card w-100">
            <div
              className={
                "card-body p-0 " +
                (optionSelected === "optionOne" ? "bg-success" : "")
              }
            >
              <p className="card-title option-question">
                {question.optionOne.text}
              </p>
              {optionSelected ? (
                <p>
                  {question.optionOne.votes.length +
                    " voted - " +
                    handlePercentageOption("optionOne")}
                </p>
              ) : (
                <button
                  type="button"
                  className="btn w-100 btn-success"
                  onClick={handleChooseOptionOne}
                >
                  Click
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="col-6 justify-content-center d-flex">
          <div className="card w-100">
            <div
              className={
                "card-body p-0 " +
                (optionSelected === "optionTwo" ? "bg-success" : "")
              }
            >
              <p className="card-title option-question">
                {question.optionTwo.text}
              </p>
              {optionSelected ? (
                <p>
                  {question.optionTwo.votes.length +
                    " voted - " +
                    handlePercentageOption("optionTwo")}
                </p>
              ) : (
                <button
                  type="button"
                  className="btn w-100 btn-success"
                  onClick={handleChooseOptionTwo}
                >
                  Click
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ questions, users, authedUser }) => {
  return {
    authedUser,
    questions,
    users,
  };
};

export default connect(mapStateToProps)(PollPage);
