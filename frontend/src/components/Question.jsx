import React from 'react';

const Question = ({ question, answerOptions, selectedAnswer, onAnswerChange }) => {
  return (
    <div className="mb-4 ml-[55vh] text-black">
      <p className="font-bold text-2xl lg:text-4xl xl:text-4xl text-black w-[100vw] mb-10">{question.text}</p>
      <div className="flex-col md:flex-row lg:flex-row xl:flex flex-wrap mt-10">
        {answerOptions.map((option) => (
          <label
            key={option.value}
            className="mr-4 mb-2 border-2 hover:bg-teal-600 xl:w-[12vw] lg:w-[12vw] rounded-md h-[10vh] flex items-center justify-center text-black text-xl cursor-pointer"
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
