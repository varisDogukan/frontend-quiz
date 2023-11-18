"use client";

import {
  ReactNode,
  createContext,
  useContext,
  useReducer,
  FunctionComponent,
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
  title: "",
  correctAnswer: 0,
  questionLength: 0,
  questions: [],
  questionTypes: [],
};

const QuestionContext = createContext<IQuestionContextType | undefined>(
  undefined
);

const QuestionProvider: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  /*
  TODO
    1- Soru bölümü seçildiğinde;
      a- Seçilen bölümün adını title' a ekle,
      b- Seçilen bölümün sorularını questions objesine getQuestion metodu ile ata.
      c- question objesinin length'ini questionLength değişkenine ata
    
    2- Soru geldiğinde;
      a- Soru seçildikten sonra submit butonuna basıldığında seçilen soru ile cevabı karşılaştır eğer doğru(bunun metodu soru sayfasında) ise currentAnswer sayısını bir arttır(bunun metodu burada olacak).
  */

  function getQuestions() {}

  function getQuestionType() {
    const result = data.quizzes;
    const tempTypes: QuestionType[] = [];

    result.map((item) =>
      tempTypes.push({
        icon: item.icon,
        id: crypto.randomUUID(),
        title: item.title,
      })
    );

    dispatch({ type: ActionTypes.GET_QUESTION_TYPE, payload: tempTypes });
  }

  function changeTitle() {}

  function incrementCurrentAnswer() {}

  function resetState() {}

  return (
    <QuestionContext.Provider
      value={{
        state,
        dispatch,
        changeTitle,
        getQuestions,
        getQuestionType,
        incrementCurrentAnswer,
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
