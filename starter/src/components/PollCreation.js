import { connect } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleAddQuestion } from "../actions/questions";

const PollCreation = ({ dispatch }) => {
  const navigate = useNavigate();
  const [optionFirst, setOptionFirst] = useState("");
  const [optionSecond, setOptionSecond] = useState("");

  const changeFirstOption = (e) => {
    const value = e.target.value;
    setOptionFirst(value);
  };

  const changeSecondOption = (e) => {
    const value = e.target.value;
    setOptionSecond(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleAddQuestion(optionFirst, optionSecond)).then(() => {
      navigate("/");
    });
    setOptionFirst("");
    setOptionSecond("");
  };

  return (
    <div className="w-75 mt-5 container justify-content-center">
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="text-center col-12">
          <h3>Would You Rather</h3>
          <span>Create your own poll</span>
        </div>
        <div className="text-center col-12">
          <label className="form-label fw-bold">First Option</label>
          <input
            type="text"
            className="form-control"
            value={optionFirst}
            onChange={changeFirstOption}
            placeholder="Option One"
            data-testid="option-one"
          />
        </div>
        <div className="text-center col-12">
          <label className="form-label fw-bold">Seccond Option</label>
          <input
            type="text"
            className="form-control"
            value={optionSecond}
            onChange={changeSecondOption}
            placeholder="Option Two"
            data-testid="option-two"
          />
        </div>
        <div className="text-center col-12">
          <button
            type="submit"
            className="btn btn-secondary"
            disabled={!(optionFirst && optionSecond)}
            data-testid="submit-button"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default connect()(PollCreation);
