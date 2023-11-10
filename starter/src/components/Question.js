import { connect } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";

const Question = ({ question }) => {
  console.log(question, "question");
  const dateTime = new Date(question.timestamp);
  const dateTimeFormat = moment(dateTime).format("hh:mm:A | MM/DD/YYYY");

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{question.author}</h5>
        <p className="text-body-secondary card-subtitle mb-2">
          {dateTimeFormat}
        </p>
        <Link
          to={`/questions/${question.id}`}
          className="btn btn-outline-success w-100"
        >
          Show
        </Link>
      </div>
    </div>
  );
};

export default connect()(Question);
