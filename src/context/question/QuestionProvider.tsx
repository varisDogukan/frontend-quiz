"use client";

import {
  ReactNode,
  createContext,
  useContext,
  useReducer,
  FunctionComponent,
  useEffect,
} from "react";
import reducer from "./reducer";
import {
  ActionTypes,
  IQuestionContextType,
  QuestionType,
  State,
} from "./types";
import data from "@/app/data.json";

const initialState: State = {
  correctAnswer: 0,
  questionCount: 0,
  questions: [],
  questionTypes: [],
  selectedAnswer: "",
  isSubmit: false,
};

const QuestionContext = createContext<IQuestionContextType | undefined>(
  undefined
);

const QuestionProvider: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const storedCorrectAnswer =
      typeof window !== "undefined"
        ? localStorage.getItem("correctAnswer")
        : null;
    if (storedCorrectAnswer) {
      dispatch({
        type: ActionTypes.INCREMENT_CURRENT_ANSWER,
        payload: parseInt(storedCorrectAnswer, 10),
      });
    }

    const storedQuestionCount =
      typeof window !== "undefined"
        ? localStorage.getItem("questionCount")
        : null;
    if (storedQuestionCount) {
      dispatch({
        type: ActionTypes.INCREMENT_QUESTION_COUNT,
        payload: parseInt(storedQuestionCount, 10),
      });
    }

    const storedQuestionTypes =
      typeof window !== "undefined"
        ? localStorage.getItem("questionTypes")
        : null;
    if (storedQuestionTypes) {
      dispatch({
        type: ActionTypes.GET_QUESTION_TYPE,
        payload: JSON.parse(storedQuestionTypes),
      });
    }
  }, []);

  function getQuestions(title: string) {
    const quizzes = data.quizzes;
    const tempQuestion = quizzes.find(
      (quiz) => quiz.title.toLowerCase() === title
    );

    dispatch({
      type: ActionTypes.GET_QUESTION,
      payload: tempQuestion?.questions,
    });
  }

  function getQuestionType() {
    const quizzes = data.quizzes;
    const tempTypes: QuestionType[] = [];

    quizzes.map((item) =>
      tempTypes.push({
        icon: item.icon,
        id: crypto.randomUUID(),
        title: item.title,
      })
    );

    dispatch({ type: ActionTypes.GET_QUESTION_TYPE, payload: tempTypes });
    localStorage.setItem("questionTypes", JSON.stringify(tempTypes));
  }

  function selectAnswer(title: string) {
    dispatch({ type: ActionTypes.SELECT_ANSWER, payload: title });
  }

  function submitAnswer(value: boolean) {
    dispatch({ type: ActionTypes.SUBMIT_ANSWER, payload: value });
  }

  function incrementCurrentAnswer() {
    dispatch({
      type: ActionTypes.INCREMENT_CURRENT_ANSWER,
      payload: state.correctAnswer + 1,
    });
    localStorage.setItem(
      "correctAnswer",
      JSON.stringify(state.correctAnswer + 1)
    );
  }

  function incrementQuestionCount() {
    dispatch({
      type: ActionTypes.INCREMENT_QUESTION_COUNT,
      payload: state.questionCount + 1,
    });
    localStorage.setItem(
      "questionCount",
      JSON.stringify(state.questionCount + 1)
    );
  }

  function resetState() {
    localStorage.removeItem("correctAnswer");
    localStorage.removeItem("questionCount");
    dispatch({ type: ActionTypes.RESET_STATE });
  }

  return (
    <QuestionContext.Provider
      value={{
        state,
        dispatch,
        getQuestions,
        getQuestionType,
        incrementCurrentAnswer,
        incrementQuestionCount,
        selectAnswer,
        submitAnswer,
        resetState,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
};

const useQuestionContext = (): IQuestionContextType => {
  const context = useContext(QuestionContext);

  if (!context) {
    throw new Error(
      "useQuestionContext must be used within an QuestionProvider"
    );
  }

  return context;
};

export { QuestionProvider, useQuestionContext, initialState };
