/* eslint-disable no-unused-vars */
import { Dispatch } from "react";

export enum ActionTypes {
  GET_QUESTION = "GET_QUESTION",
  GET_QUESTION_TYPE = "GET_QUESTION_TYPE",
  INCREMENT_CURRENT_ANSWER = "INCREMENT_CURRENT_ANSWER",
  INCREMENT_QUESTION_COUNT = "INCREMENT_QUESTION_COUNT",
  SELECT_ANSWER = "SELECT_ANSWER",
  SUBMIT_ANSWER = "SUBMIT_ANSWER",
  RESET_STATE = "RESET_STATE",
}

export interface IQuestion {
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
  questionTypes: QuestionType[];
  correctAnswer: number;
  questionCount: number;
  selectedAnswer: string;
  isSubmit: boolean;
};

type GetQuestionsAction = {
  type: ActionTypes.GET_QUESTION;
  payload?: IQuestion[];
};

type IncrementCurrentAnswerAction = {
  type: ActionTypes.INCREMENT_CURRENT_ANSWER;
  payload: number;
};

type IncrementQuestionCount = {
  type: ActionTypes.INCREMENT_QUESTION_COUNT;
  payload: number;
};

type ResetStateAction = {
  type: ActionTypes.RESET_STATE;
};

type GetQuestionTypeAction = {
  type: ActionTypes.GET_QUESTION_TYPE;
  payload: QuestionType[];
};

type SelectAnswerAction = {
  type: ActionTypes.SELECT_ANSWER;
  payload: string;
};

type SubmitAnswerAction = {
  type: ActionTypes.SUBMIT_ANSWER;
  payload: boolean;
};

export type Action =
  | GetQuestionsAction
  | GetQuestionTypeAction
  | IncrementCurrentAnswerAction
  | IncrementQuestionCount
  | SelectAnswerAction
  | SubmitAnswerAction
  | ResetStateAction;

export interface IQuestionContextType {
  state: State;
  dispatch: Dispatch<Action>;

  getQuestions: (title: string) => void;
  getQuestionType: () => void;
  incrementCurrentAnswer: () => void;
  incrementQuestionCount: () => void;
  selectAnswer: (title: string) => void;
  submitAnswer: (value: boolean) => void;
  resetState: () => void;
}
