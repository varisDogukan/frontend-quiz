import { Action, State, ActionTypes } from "./types";

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionTypes.GET_QUESTION:
      return {
        ...state,
        questions: action.payload!,
      };

    case ActionTypes.GET_QUESTION_TYPE:
      return {
        ...state,
        questionTypes: action.payload,
      };

    case ActionTypes.INCREMENT_CURRENT_ANSWER:
      return {
        ...state,
        correctAnswer: action.payload,
      };

    case ActionTypes.INCREMENT_QUESTION_COUNT:
      return {
        ...state,
        questionCount: action.payload,
      };

    case ActionTypes.SELECT_ANSWER:
      return {
        ...state,
        selectedAnswer: action.payload,
      };

    case ActionTypes.SUBMIT_ANSWER:
      return {
        ...state,
        isSubmit: action.payload,
      };

    case ActionTypes.RESET_STATE:
      return {
        ...state,
        correctAnswer: 0,
        questionCount: 0,
        selectedAnswer: "",
        isSubmit: false,
      };

    default:
      return state;
  }
};

export default reducer;
