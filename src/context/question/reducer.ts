import { Action, State, ActionTypes } from "./types";
import { initialState } from "./QuestionProvider";

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionTypes.CHANGE_TITLE:
      return state;

    case ActionTypes.GET_QUESTION:
      return state;

    case ActionTypes.INCREMENT_CURRENT_ANSWER:
      return state;

    case ActionTypes.RESET_STATE:
      return {
        ...state,
        ...initialState,
      };

    default:
      return state;
  }
};

export default reducer;
