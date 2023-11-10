import { connect } from "react-redux";
import ListQuestion from "./ListQuestions";

const Dashboard = ({ authedUser, questions }) => {
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
      <ListQuestion
        key="new-questions"
        listQuestions={newQuestions}
        nameList="New Questions"
      />
      <ListQuestion
        key="done-questions"
        listQuestions={doneQuestions}
        nameList="Done"
      />
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
