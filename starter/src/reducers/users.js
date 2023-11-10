import {
  RECEIVE_USERS,
  SUBMIT_QUESTIONS_ANSWER_USER,
  ADD_NEW_QUESTIONS_BY_USER,
} from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case ADD_NEW_QUESTIONS_BY_USER:
      return {
        ...state,
        [action.author]: {
          ...state[action.author],
          questions: state[action.author].questions.concat(action.qid),
        },
      };
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case SUBMIT_QUESTIONS_ANSWER_USER:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.qid]: action.answer,
          },
        },
      };
    default:
      return state;
  }
}
