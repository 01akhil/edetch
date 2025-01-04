import React from 'react';

const Question = ({ question, answerOptions, selectedAnswer, onAnswerChange }) => {
  return (
    <div className="mb-4 text-black flex flex-col items-center justify-center">
      <p className="font-bold text-2xl ">{question.text}</p>
      <div className="mt-10 flex flex-col gap-2">
        {answerOptions.map((option) => (
          <label
            key={option.value}
            className="border-2 hover:bg-teal-600  rounded-md h-[10vh] flex items-center justify-center text-black text-xl cursor-pointer w-[30vw] select-none"
          >
            <input
              className="hidden"
              type="radio"
              name={`question-${question.index}`}
              value={option.value}
              onChange={() => onAnswerChange(question.index, option.value)}
              checked={selectedAnswer === option.value}
              
            />
            {option.label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Question;
