import React from 'react';
import useApp from '../hooks/useApp';

const Question = ({ qs }) => {
  const { ans, setAns, answers, setAnswers } = useApp();

  const selectAns = (questionId, ansId) => {
    const temp = answers.filter((ans) => ans.questionId !== questionId);
    temp.push({ questionId, ansId });
    setAnswers(temp);

    setAns((prev) => {
      let temp = { ...prev };
      temp[`ans${questionId}`] = ansId;
      return temp;
    });
  };
  // console.log(answers);
  console.log(ans);
  return (
    <div>
      <p>{qs?.question}</p>
      {qs?.options?.map((op) => (
        <div key={op.id}>
          <button
            style={{
              backgroundColor: ans[`ans${qs.id}`] === op.id ? 'green' : null
            }}
            onClick={() => selectAns(qs.id, op.id)}
          >
            {op.option}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Question;
