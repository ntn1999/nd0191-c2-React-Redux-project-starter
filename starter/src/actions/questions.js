import { saveQuestion, saveQuestionAnswer } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import { addNewQuestionByUser, addQuestionAnswerUser } from "./users";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS ";
export const SUBMIT_QUESTION_ANSWER = "SUBMIT_QUESTION_ANSWER";
export const ADD_NEW_QUESTION = "ADD_NEW_QUESTION";

function addQuestion(question) {
  return {
    type: ADD_NEW_QUESTION,
    question,
  };
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    dispatch(showLoading());

    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser.id,
    })
      .then((question) => {
        dispatch(addQuestion(question));
        dispatch(addNewQuestionByUser(question));
      })
      .then(() => dispatch(hideLoading()));
  };
}

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

function addQuestionAnswer({ authedUser, qid, answer }) {
  return {
    type: SUBMIT_QUESTION_ANSWER,
    authedUser,
    qid,
    answer,
  };
}

export function submitQuestionAnswer(answer, qid) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(showLoading());
    return saveQuestionAnswer({
      qid,
      answer,
      authedUser: authedUser.id,
    })
      .then((_) => {
        dispatch(addQuestionAnswer({ qid, answer, authedUser: authedUser.id }));
        dispatch(
          addQuestionAnswerUser({ qid, answer, authedUser: authedUser.id })
        );
      })
      .then(() => dispatch(hideLoading()));
  };
}
