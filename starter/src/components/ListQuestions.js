import Question from "./Question";
import { connect } from "react-redux";

const ListQuestion = ({ listQuestions, nameList }) => {
  return (
    <div>
      <div className="container mt-5 text-center border">
        <div className="row">
          <div className="col border-bottom py-3">
            <h3>{nameList}</h3>
          </div>
        </div>
        <div className="row pt-3">
          {listQuestions.map((question) => (
            <Question key={question.id} question={question} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default connect()(ListQuestion);
