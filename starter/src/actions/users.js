export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_NEW_QUESTIONS_BY_USER = "ADD_NEW_QUESTIONS_BY_USER";
export const SUBMIT_QUESTIONS_ANSWER_USER = "SUBMIT_QUESTIONS_ANSWER_USER";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function addNewQuestionByUser({ author, id }) {
  return {
    author,
    type: ADD_NEW_QUESTIONS_BY_USER,
    qid: id,
  };
}

export function addQuestionAnswerUser({ authedUser, qid, answer }) {
  return {
    authedUser,
    qid,
    type: SUBMIT_QUESTIONS_ANSWER_USER,
    answer,
  };
}
