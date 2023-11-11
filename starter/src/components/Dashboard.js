import { connect } from "react-redux";
import { useState } from "react";
import ListQuestion from "./ListQuestions";

const Dashboard = ({ authedUser, questions }) => {
  const [isNewQuestionShow, setIsNewQuestionShow] = useState("new");

  const handleShowTabQuestion = (show) => {
    setIsNewQuestionShow(show);
  };

  const doneQuestions = questions.filter(
    (question) =>
      question.optionOne.votes.includes(authedUser.id) ||
      question.optionTwo.votes.includes(authedUser.id)
  );

  const newQuestions = questions.filter(
    (question) =>
      !question.optionOne.votes.includes(authedUser.id) &&
      !question.optionTwo.votes.includes(authedUser.id)
  );

  return (
    <div data-testid="dashboard-screen">
      <button
        className="btn btn-outline-success me-3 mt-4"
        onClick={() => handleShowTabQuestion("new")}
      >
        New questions
      </button>
      <button
        className="btn btn-outline-success mt-4"
        onClick={() => handleShowTabQuestion("done")}
      >
        Done questions
      </button>

      <div className={`collapse ${isNewQuestionShow === "new" ? "show" : ""}`}>
        <ListQuestion
          key="new-questions"
          listQuestions={newQuestions}
          nameList="New Questions"
        />
      </div>
      <div
        className={`collapse ${isNewQuestionShow === "done" ? "show" : ""}`}
      >
        <ListQuestion
          key="done-questions"
          listQuestions={doneQuestions}
          nameList="Done"
        />
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser, questions }) => ({
  authedUser,
  questions: Object.values(questions).sort((a, b) => {
    return b.timestamp - a.timestamp;
  }),
});

export default connect(mapStateToProps)(Dashboard);
