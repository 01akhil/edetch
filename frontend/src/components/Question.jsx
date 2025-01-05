// import React from 'react';

// const Question = ({ question, answerOptions, selectedAnswer, onAnswerChange }) => {
//   return (
//     <div className="mb-4 text-black flex flex-col items-center justify-center">
//       <p className="font-bold text-lg ">{question.text}</p>
//       <div className="mt-5 flex flex-col gap-2">
//         {answerOptions.map((option) => (
//           <label
//             key={option.value}
//             className="border-2 hover:bg-teal-600  rounded-md h-[8vh] flex items-center justify-center text-black text-xl cursor-pointer w-[30vw] select-none border-[#4CC9B3]"
//           >
//             <input
//               className="hidden"
//               type="radio"
//               name={`question-${question.index}`}
//               value={option.value}
//               onChange={() => onAnswerChange(question.index, option.value)}
//               checked={selectedAnswer === option.value}
              
//             />
//             {option.label}
//           </label>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Question;



// import React from 'react';

// const Question = ({
//   question,
//   answerOptions,
//   selectedAnswer,
//   onAnswerChange,
//   currentQuestionIndex,
//   totalQuestions,
//   questionsAttempted,
// }) => {
//   const progressPercentage = Math.floor((questionsAttempted / 60) * 100);

//   return (
//     <div className="mb-4 text-black flex flex-col items-center justify-center">
//       <p className="font-bold text-lg">{question.text}</p>
//       <div className="mt-5 flex flex-col gap-2">
//         {answerOptions.map((option) => (
//           <label
//             key={option.value}
//             className="border-2 hover:bg-teal-600 rounded-md h-[8vh] flex items-center justify-center text-black text-xl cursor-pointer w-[30vw] select-none border-[#4CC9B3]"
//           >
//             <input
//               className="hidden"
//               type="radio"
//               name={`question-${question.index}`}
//               value={option.value}
//               onChange={() => onAnswerChange(question.index, option.value)}
//               checked={selectedAnswer === option.value}
//             />
//             {option.label}
//           </label>
//         ))}
//       </div>

//       {/* Footer section */}
//       <div className="fixed bottom-2 w-[33%] text-center">
//         <p className="font-medium text-gray-600 mb-2">
//           Question {currentQuestionIndex + 1} of 60
//         </p>
//         <div className="w-[90%] mx-auto  bg-gray-200 rounded-full h-1.5">
//           <div
//             className="bg-teal-600 h-1.5 rounded-full"
//             style={{ width: `${progressPercentage}%` }}
//           ></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Question;


import React from 'react';

const Question = ({
  question,
  answerOptions,
  selectedAnswer,
  onAnswerChange,
  questionsAttempted,
}) => {
  const progressPercentage = Math.floor((questionsAttempted / 60) * 100);

  return (
    <div className="mb-4 text-black flex flex-col items-center justify-center w-full">
      <p className="font-bold text-lg">{question.text}</p>
      <div className="mt-5 flex flex-col gap-2 w-[29vw] ">
        {answerOptions.map((option) => (
          <label
            key={option.value}
            className="border-2 hover:bg-teal-600 rounded-md h-[8vh] flex items-center justify-center text-black text-xl cursor-pointer select-none border-[#4CC9B3]"
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

{
  questionsAttempted <60 && (
    <div className="fixed bottom-16 w-[90%] max-w-[400px]">
    <div className="w-full bg-gray-300 rounded-full h-2">
      <div
        className="bg-[#4CC9B3] h-2 rounded-full"
        style={{ width: `${progressPercentage}%` }}
      />
    </div>
    
      <p className="text-center text-sm mt-1">{`Question ${questionsAttempted} of 60`}</p>
    
  </div>
  )
}

     
    </div>
  );
};

export default Question;
