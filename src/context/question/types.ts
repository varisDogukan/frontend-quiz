/* eslint-disable no-unused-vars */
import { Dispatch } from "react";

export enum ActionTypes {
  CHANGE_TITLE = "CHANGE_TITLE",
  GET_QUESTION = "GET_QUESTION",
  GET_QUESTION_TYPE = "GET_QUESTION_TYPE",
  INCREMENT_CURRENT_ANSWER = "INCREMENT_CURRENT_ANSWER",
  RESET_STATE = "RESET_STATE",
}

interface IQuestion {
  question: string;
  options: string[];
  answer: string;
}

export type QuestionType = {
  id: string;
  title: string;
  icon: string;
};

export type State = {
  questions: IQuestion[];
  questionLength: number;
  questionTypes: QuestionType[];
  correctAnswer: number;
  title: string;
};

type GetQuestionsAction = {
  type: ActionTypes.GET_QUESTION;
};

type ChangeTitleAction = {
  type: ActionTypes.CHANGE_TITLE;
};

type IncrementCurrentAnswerAction = {
  type: ActionTypes.INCREMENT_CURRENT_ANSWER;
};

type ResetStateAction = {
  type: ActionTypes.RESET_STATE;
};

type GetQuestionTypeAction = {
  type: ActionTypes.GET_QUESTION_TYPE;
  payload: QuestionType[];
};

export type Action =
  | GetQuestionsAction
  | GetQuestionTypeAction
  | ChangeTitleAction
  | IncrementCurrentAnswerAction
  | ResetStateAction;

export interface IQuestionContextType {
  state: State;
  dispatch: Dispatch<Action>;

  getQuestions: () => void;
  getQuestionType: () => void;
  changeTitle: () => void;
  incrementCurrentAnswer: () => void;
  resetState: () => void;
}
