import { useState } from 'react';

const useAppHandler = () => {
  const [answers, setAnswers] = useState([]);
  const [ans, setAns] = useState({});
  const [marks, setMarks] = useState(0);
  const [activeQsId, setActiveQsId] = useState(0);
  const questions = [
    {
      id: 1,
      question: 'What is JavaScipt?',
      options: [
        { id: 1, option: 'A programming Language' },
        { id: 2, option: 'An animal Language' },
        { id: 3, option: 'A query Language' }
      ],
      ans: { id: 1 }
    },
    {
      id: 2,
      question: 'Is JavaScipt a compiled language?',
      options: [
        { id: 1, option: 'Yes' },
        { id: 2, option: 'No' }
      ],
      ans: { id: 2 }
    },
    {
      id: 3,
      question: 'How JavaScipt gets converted into machine code?',
      options: [
        { id: 1, option: 'Through a compiler' },
        { id: 2, option: 'Through an interprater' }
      ],
      ans: { id: 2 }
    }
  ];

  const nextQs = () => {
    if (activeQsId >= questions.length - 1) return;
    setActiveQsId((prev) => ++prev);
  };

  const prevQs = () => {
    if (activeQsId <= 0) return;
    setActiveQsId((prev) => --prev);
  };

  return {
    questions,
    answers,
    setAnswers,
    marks,
    setMarks,
    activeQsId,
    setActiveQsId,
    nextQs,
    prevQs,
    ans,
    setAns
  };
};

export default useAppHandler;
