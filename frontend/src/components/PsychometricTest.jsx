// import * as React from "react";
// import QuestionOption from "./QuestionOption";
// import ProgressBar from "./ProgressBar";
// import { Footer } from "./Footer";

// const options = [
//   { id: 1, text: "Strongly dislike", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/b337d1d3fa2734ffd45a7414ac6f3e00247cca68e76cc809e0ec1da9194577ad?placeholderIfAbsent=true&apiKey=a7aa20653aa64d86973d64a54ce38b26" },
//   { id: 2, text: "Dislike", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/fa565f0fa4cb4e5f8381203c5e776dc2b6bf3c2110ebc70dd5277d759f7d7a5d?placeholderIfAbsent=true&apiKey=a7aa20653aa64d86973d64a54ce38b26" },
//   { id: 3, text: "Not sure", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/63cd1865dce72c935e7b35c9f9eb8ee0a72cde541187027d1aa56a447f11d62a?placeholderIfAbsent=true&apiKey=a7aa20653aa64d86973d64a54ce38b26" },
//   { id: 4, text: "Like", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/f97a2a38d2c0c5284ccfb0a9a448a52852ca1a89ed2f504c12638219cee172e3?placeholderIfAbsent=true&apiKey=a7aa20653aa64d86973d64a54ce38b26" },
//   { id: 5, text: "Strongly like", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/4a1020ac91884bf22063e47f2bcc305aee71dc4624c188cc907febf46d747c00?placeholderIfAbsent=true&apiKey=a7aa20653aa64d86973d64a54ce38b26" }
// ];


// const answerOptions = [
//   { value: 1, label: 'Strongly Dislike' },
//   { value: 2, label: 'Dislike' },
//   { value: 3, label: 'Not sure' },
//   { value: 4, label: 'Like' },
//   { value: 5, label: 'Strongly Like' }
// ];

// const questions = [
//   { index: 1, area: "Realistic", text: "Build kitchen cabinets" },
//   { index: 2, area: "Realistic", text: "Lay brick or tile" },
//   { index: 3, area: "Investigative", text: "Develop a new medicine" },
//   { index: 4, area: "Investigative", text: "Study ways to reduce water pollution" },
//   { index: 5, area: "Artistic", text: "Write books or plays" },
//   { index: 6, area: "Artistic", text: "Play a musical instrument" },
//   { index: 7, area: "Social", text: "Teach an individual an exercise routine" },
//   { index: 8, area: "Social", text: "Help people with personal or emotional problems" },
//   { index: 9, area: "Enterprising", text: "Buy and sell stocks and bonds" },
//   { index: 10, area: "Enterprising", text: "Manage a retail store" },
//   { index: 11, area: "Conventional", text: "Develop a spreadsheet using computer software" },
//   { index: 12, area: "Conventional", text: "Proofread records or forms" },
//   { "index": 13, "area": "Realistic", "text": "Repair household appliances" },
//   { "index": 14, "area": "Realistic", "text": "Raise fish in a fish hatchery" },
//   { "index": 15, "area": "Investigative", "text": "Conduct chemical experiments" },
//   { "index": 16, "area": "Investigative", "text": "Study the movement of planets" },
//   { "index": 17, "area": "Artistic", "text": "Compose or arrange music" },
//   { "index": 18, "area": "Artistic", "text": "Draw pictures" },
//   { "index": 19, "area": "Social", "text": "Give career guidance to people" },
//   { "index": 20, "area": "Social", "text": "Perform rehabilitation therapy" },
//   { "index": 21, "area": "Enterprising", "text": "Operate a beauty salon or barber shop" },
//   { "index": 22, "area": "Enterprising", "text": "Manage a department within a large company" },
//   { "index": 23, "area": "Conventional", "text": "Install software across computers on a large network" },
//   { "index": 24, "area": "Conventional", "text": "Operate a calculator" },
//   { "index": 25, "area": "Realistic", "text": "Assemble electronic parts" },
//   { "index": 26, "area": "Realistic", "text": "Drive a truck to deliver packages to offices and homes" },
//   { "index": 27, "area": "Investigative", "text": "Examine blood samples using a microscope" },
//   { "index": 28, "area": "Investigative", "text": "Investigate the cause of a fire" },
//   { "index": 29, "area": "Artistic", "text": "Create special effects for movies" },
//   { "index": 30, "area": "Artistic", "text": "Paint sets for plays" },
//   { "index": 31, "area": "Social", "text": "Do volunteer work at a non-profit organization" },
//   { "index": 32, "area": "Social", "text": "Teach children how to play sports" },
//   { "index": 33, "area": "Enterprising", "text": "Start your own business" },
//   { "index": 34, "area": "Enterprising", "text": "Negotiate business contracts" },
//   { "index": 35, "area": "Conventional", "text": "Keep shipping and receiving records" },
//   { "index": 36, "area": "Conventional", "text": "Calculate the wages of employees" },
//   { "index": 37, "area": "Realistic", "text": "Test the quality of parts before shipment" },
//   { "index": 38, "area": "Realistic", "text": "Repair and install locks" },
//   { "index": 39, "area": "Investigative", "text": "Develop a way to better predict the weather" },
//   { "index": 40, "area": "Investigative", "text": "Work in a biology lab" },
//   { "index": 41, "area": "Artistic", "text": "Write scripts for movies or television shows" },
//   { "index": 42, "area": "Artistic", "text": "Perform jazz or tap dance" },
//   { "index": 43, "area": "Social", "text": "Teach sign language to people who are deaf or hard of hearing" },
//   { "index": 44, "area": "Social", "text": "Help conduct a group therapy session" },
//   { "index": 45, "area": "Enterprising", "text": "Represent a client in a lawsuit" },
//   { "index": 46, "area": "Enterprising", "text": "Market a new line of clothing" },
//   { "index": 47, "area": "Conventional", "text": "Inventory supplies using a hand-held computer" },
//   { "index": 48, "area": "Conventional", "text": "Record rent payments" },
//   { "index": 49, "area": "Realistic", "text": "Set up and operate machines to make products" },
//   { "index": 50, "area": "Realistic", "text": "Put out forest fires" },
//   { "index": 51, "area": "Investigative", "text": "Invent a replacement for sugar" },
//   { "index": 52, "area": "Investigative", "text": "Do laboratory tests to identify diseases" },
//   { "index": 53, "area": "Artistic", "text": "Sing in a band" },
//   { "index": 54, "area": "Artistic", "text": "Edit movies" },
//   { "index": 55, "area": "Social", "text": "Take care of children at a day-care center" },
//   { "index": 56, "area": "Social", "text": "Teach a high-school class" },
//   { "index": 57, "area": "Enterprising", "text": "Sell merchandise at a department store" },
//   { "index": 58, "area": "Enterprising", "text": "Manage a clothing store" },
//   { "index": 59, "area": "Conventional", "text": "Keep inventory records" },
//   { "index": 60, "area": "Conventional", "text": "Stamp, sort, and distribute mail for an organization" }
// ];

// function PsychometricTest() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen pl-4 pr-4 pt-16 ">
//       <div className="flex flex-col text-center text-zinc-900 max-w-[35vw] w-full">
//         <h1 className="text-lg font-bold tracking-tight">
//           Psychometric Test
//         </h1>
//         <p className="mt-1 text-sm font-normal">
//           Indicate your likings about these specific works
//         </p>
//       </div>
//       <div className="flex flex-col items-center justify-center mt-9 w-full max-w-[35vw] text-zinc-900">
//         <h2 className=" text-[18px] font-extrabold tracking-tight text-center w-[30vw] leading-[20px]">
//           Develop a spreadsheet using a computer software
//         </h2>
//         <div className="flex flex-col mt-4 w-full">
//           {options.map((option) => (
//             <QuestionOption
//               key={option.id}
//               text={option.text}
//               imageSrc={option.imageSrc}
//             />
//           ))}
//         </div>
//         <ProgressBar currentQuestion={1} totalQuestions={60} />
//       </div>

//       <Footer />
//     </div>
//   );
// }

// export default PsychometricTest;







// import * as React from "react";
// import QuestionOption from "./QuestionOption";
// import ProgressBar from "./ProgressBar";
// import { Footer } from "./Footer";
// import { useState } from "react";

// const options = [
//   { id: 1, text: "Strongly dislike" },
//   { id: 2, text: "Dislike" },
//   { id: 3, text: "Not sure" },
//   { id: 4, text: "Like" },
//   { id: 5, text: "Strongly like" },
// ];

// const questions = [
//   { index: 1, area: "Realistic", text: "Build kitchen cabinets" },
//   { index: 2, area: "Realistic", text: "Lay brick or tile" },
//   // Add all remaining questions here...
//   { index: 60, area: "Conventional", text: "Stamp, sort, and distribute mail for an organization" },
// ];

// function PsychometricTest() {
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [answers, setAnswers] = useState(new Array(questions.length).fill(null));
  
//   const handleAnswer = (answer) => {
//     const updatedAnswers = [...answers];
//     updatedAnswers[currentQuestionIndex] = answer;
//     setAnswers(updatedAnswers);
//   };

//   const goToNextQuestion = () => {
//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     }
//   };

//   const goToPreviousQuestion = () => {
//     if (currentQuestionIndex > 0) {
//       setCurrentQuestionIndex(currentQuestionIndex - 1);
//     }
//   };

//   const isLastQuestion = currentQuestionIndex === questions.length - 1;
//   const allQuestionsAnswered = answers.every((answer) => answer !== null);

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen px-4 pt-16">
//       <div className="flex flex-col text-center text-zinc-900 max-w-[35vw] w-full">
//         <h1 className="text-lg font-bold tracking-tight">Psychometric Test</h1>
//         <p className="mt-1 text-sm font-normal">
//           Indicate your likings about these specific works
//         </p>
//       </div>

//       <div className="flex flex-col items-center justify-center mt-9 w-full max-w-[35vw] text-zinc-900">
//         <h2 className="text-[18px] font-extrabold tracking-tight text-center w-[30vw] leading-[20px]">
//           {questions[currentQuestionIndex].text}
//         </h2>

//         <div className="flex flex-col mt-4 w-full">
//           {options.map((option) => (
//             <div
//               key={option.id}
//               className={`cursor-pointer flex flex-col justify-center items-center px-3 py-3 mt-[1.4vh] w-full rounded-lg border-2 ${
//                 answers[currentQuestionIndex] === option.id
//                   ? "bg-teal-400 text-white"
//                   : "border-teal-400"
//               }`}
//               onClick={() => handleAnswer(option.id)}
//             >
//               {option.text}
//             </div>
//           ))}
//         </div>

//         <ProgressBar
//           currentQuestion={currentQuestionIndex + 1}
//           totalQuestions={questions.length}
//         />

//         <div className="flex justify-between mt-4 w-full max-w-[35vw]">
//           <button
//             className="px-4 py-2 bg-gray-300 rounded-md disabled:opacity-50"
//             onClick={goToPreviousQuestion}
//             disabled={currentQuestionIndex === 0}
//           >
//             Previous
//           </button>
//           {isLastQuestion && allQuestionsAnswered ? (
//             <button
//               className="px-4 py-2 bg-green-500 text-white rounded-md"
//               onClick={() => alert(`Your answers: ${answers.join("")}`)}
//             >
//               Submit
//             </button>
//           ) : (
//             <button
//               className="px-4 py-2 bg-blue-500 text-white rounded-md"
//               onClick={goToNextQuestion}
//               disabled={!answers[currentQuestionIndex]}
//             >
//               Next
//             </button>
//           )}
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// }

// export default PsychometricTest;






import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import { Footer } from "./Footer";

import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight} from 'lucide-react';

const optionEmojis = {
  1: (
    <svg className="hover:fill-[#4CC9B3]" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width={30} viewBox="0 0 24 24">
      <g>
        <path d="M9.704 7.54a2 2 0 0 1-.318.712c-.184.263-.42.461-.72.541c-.298.08-.602.027-.893-.108a2 2 0 0 1-.631-.459l-1.131.986c.229.262.625.598 1.13.833c.51.237 1.183.393 1.914.197c.732-.196 1.236-.667 1.56-1.128c.319-.455.494-.944.561-1.286zm4.593 0c.03.154.13.444.318.712c.184.263.42.461.72.541c.298.08.602.027.893-.108c.298-.139.528-.34.631-.459l1.131.986a3.5 3.5 0 0 1-1.13.833c-.51.237-1.182.393-1.914.197c-.731-.196-1.236-.667-1.56-1.128a3.5 3.5 0 0 1-.56-1.286z"></path>
        <path fillRule="evenodd" d="M8.641 12.641A4.75 4.75 0 0 1 16.75 16v.75h-9.5V16c0-1.26.5-2.468 1.391-3.359M12 12.75a3.25 3.25 0 0 0-3.162 2.5h6.324A3.25 3.25 0 0 0 12 12.75" clipRule="evenodd"></path>
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2M4 12a8 8 0 1 1 16 0a8 8 0 0 1-16 0" clipRule="evenodd"></path>
      </g>
    </svg>
  ), // Strongly Dislike
  2: (
    <svg className="hover:fill-[white]" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width={30} viewBox="0 0 24 24">
      <g fillRule="evenodd">
        <path fill="currentColor" d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></path>
        <path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16m0 9c1.267 0 2.427.473 3.308 1.25a1 1 0 1 1-1.324 1.5A3 3 0 0 0 12 15c-.761 0-1.455.282-1.984.75a1 1 0 1 1-1.323-1.5A5 5 0 0 1 12 13M8.5 8a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m7 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"></path>
      </g>
    </svg>
  ), // Dislike
  3: (
    <svg className="hover:fill-[white]" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width={30} viewBox="0 0 24 24">
      <g>
        <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></path>
        <path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16m-1.832 11.445c1.201-1.801 3.61-3.032 6.075-2.415a1 1 0 1 1-.485 1.94c-1.535-.384-3.127.386-3.926 1.585a1 1 0 0 1-1.664-1.11M9.5 8a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m6-1a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"></path>
      </g>
    </svg>
  ), // Unsure
  4: (
    <svg className="hover:fill-[white]" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width={30} viewBox="0 0 24 24">
      <path d="M8.36 15.33a1 1 0 0 0-.13 1.4a1 1 0 0 0 1.41.13a3.76 3.76 0 0 1 4.72 0a1 1 0 0 0 .64.23a1 1 0 0 0 .64-1.76a5.81 5.81 0 0 0-7.28 0m.85-4.79a1 1 0 0 0 1.41 0a1 1 0 0 0 0-1.41a3.08 3.08 0 0 0-4.24 0a1 1 0 1 0 1.41 1.41a1 1 0 0 1 1.42 0M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8m5.62-10.87a3.08 3.08 0 0 0-4.24 0a1 1 0 0 0 1.41 1.41a1 1 0 0 1 1.42 0a1 1 0 0 0 1.41 0a1 1 0 0 0 0-1.41"></path>
    </svg>
  ), // Like
  5: (
    <svg className="hover:fill-[white]" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width={30} viewBox="0 0 24 24">
      <path className="hover:fill-[white]" fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2m0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8"></path>
      <circle  cx={8.5} cy={9.5} r={1.5} fill="currentColor"></circle>
      <circle cx={15.493} cy={9.493} r={1.493} fill="currentColor"></circle>
      <path fill="currentColor" d="M12 18c5 0 6-5 6-5H6s1 5 6 5"></path>
    </svg>
  ), // Strongly Like
};


// const optionEmojis = {
//   1: (
//     <svg  fill="currentColor"  xmlns="http://www.w3.org/2000/svg" width={30}  viewBox="0 0 24 24">
//       <g >
//         <path d="M9.704 7.54a2 2 0 0 1-.318.712c-.184.263-.42.461-.72.541c-.298.08-.602.027-.893-.108a2 2 0 0 1-.631-.459l-1.131.986c.229.262.625.598 1.13.833c.51.237 1.183.393 1.914.197c.732-.196 1.236-.667 1.56-1.128c.319-.455.494-.944.561-1.286zm4.593 0c.03.154.13.444.318.712c.184.263.42.461.72.541c.298.08.602.027.893-.108c.298-.139.528-.34.631-.459l1.131.986a3.5 3.5 0 0 1-1.13.833c-.51.237-1.182.393-1.914.197c-.731-.196-1.236-.667-1.56-1.128a3.5 3.5 0 0 1-.56-1.286z"></path>
//         <path fillRule="evenodd" d="M8.641 12.641A4.75 4.75 0 0 1 16.75 16v.75h-9.5V16c0-1.26.5-2.468 1.391-3.359M12 12.75a3.25 3.25 0 0 0-3.162 2.5h6.324A3.25 3.25 0 0 0 12 12.75" clipRule="evenodd"></path>
//         <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2M4 12a8 8 0 1 1 16 0a8 8 0 0 1-16 0" clipRule="evenodd"></path>
//       </g>
//     </svg>
//   ), // Strongly Dislike
//   2: (
//     <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width={30} viewBox="0 0 24 24">
//       <g  fillRule="evenodd">
//         <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></path>
//         <path fill="#4CC9B3" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16m0 9c1.267 0 2.427.473 3.308 1.25a1 1 0 1 1-1.324 1.5A3 3 0 0 0 12 15c-.761 0-1.455.282-1.984.75a1 1 0 1 1-1.323-1.5A5 5 0 0 1 12 13M8.5 8a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m7 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"></path>
//       </g>
//     </svg>
//   ), // Dislike
//   3: (
//     <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width={30} viewBox="0 0 24 24">
//       <g>
//         <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></path>
//         <path fill="#4CC9B3" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16m-1.832 11.445c1.201-1.801 3.61-3.032 6.075-2.415a1 1 0 1 1-.485 1.94c-1.535-.384-3.127.386-3.926 1.585a1 1 0 0 1-1.664-1.11M9.5 8a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m6-1a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"></path>
//       </g>
//     </svg>
//   ), // Unsure
//   4: (
//     <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width={30} viewBox="0 0 24 24">
//       <path d="M8.36 15.33a1 1 0 0 0-.13 1.4a1 1 0 0 0 1.41.13a3.76 3.76 0 0 1 4.72 0a1 1 0 0 0 .64.23a1 1 0 0 0 .64-1.76a5.81 5.81 0 0 0-7.28 0m.85-4.79a1 1 0 0 0 1.41 0a1 1 0 0 0 0-1.41a3.08 3.08 0 0 0-4.24 0a1 1 0 1 0 1.41 1.41a1 1 0 0 1 1.42 0M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8m5.62-10.87a3.08 3.08 0 0 0-4.24 0a1 1 0 0 0 1.41 1.41a1 1 0 0 1 1.42 0a1 1 0 0 0 1.41 0a1 1 0 0 0 0-1.41"></path>
//     </svg>
//   ), // Like
//   5: (
//     <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width={30} viewBox="0 0 24 24">
//       <path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2m0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8"></path>
//       <circle cx={8.5} cy={9.5} r={1.5} fill="#4CC9B3"></circle>
//       <circle cx={15.493} cy={9.493} r={1.493} fill="#4CC9B3"></circle>
//       <path fill="currentColor" d="M12 18c5 0 6-5 6-5H6s1 5 6 5"></path>
//     </svg>
//   ), // Strongly Like
// };

const options = [
  { id: 1, text: "Strongly dislike",emoji: optionEmojis[1] },
  { id: 2, text: "Dislike",emoji: optionEmojis[2] },
  { id: 3, text: "Not sure",emoji: optionEmojis[3] },
  { id: 4, text: "Like",  emoji: optionEmojis[4] },
  { id: 5, text: "Strongly like", emoji: optionEmojis[5]  },
];


const questions = [
  { index: 1, area: "Realistic", text: "Build kitchen cabinets" },
  { index: 2, area: "Realistic", text: "Lay brick or tile" },
  { index: 3, area: "Investigative", text: "Develop a new medicine" },
  { index: 4, area: "Investigative", text: "Study ways to reduce water pollution" },
  { index: 5, area: "Artistic", text: "Write books or plays" },
  { index: 6, area: "Artistic", text: "Play a musical instrument" },
  { index: 7, area: "Social", text: "Teach an individual an exercise routine" },
  { index: 8, area: "Social", text: "Help people with personal or emotional problems" },
  { index: 9, area: "Enterprising", text: "Buy and sell stocks and bonds" },
  { index: 10, area: "Enterprising", text: "Manage a retail store" },
  { index: 11, area: "Conventional", text: "Develop a spreadsheet using computer software" },
  { index: 12, area: "Conventional", text: "Proofread records or forms" },
  { "index": 13, "area": "Realistic", "text": "Repair household appliances" },
  { "index": 14, "area": "Realistic", "text": "Raise fish in a fish hatchery" },
  { "index": 15, "area": "Investigative", "text": "Conduct chemical experiments" },
  { "index": 16, "area": "Investigative", "text": "Study the movement of planets" },
  { "index": 17, "area": "Artistic", "text": "Compose or arrange music" },
  { "index": 18, "area": "Artistic", "text": "Draw pictures" },
  { "index": 19, "area": "Social", "text": "Give career guidance to people" },
  { "index": 20, "area": "Social", "text": "Perform rehabilitation therapy" },
  { "index": 21, "area": "Enterprising", "text": "Operate a beauty salon or barber shop" },
  { "index": 22, "area": "Enterprising", "text": "Manage a department within a large company" },
  { "index": 23, "area": "Conventional", "text": "Install software across computers on a large network" },
  { "index": 24, "area": "Conventional", "text": "Operate a calculator" },
  { "index": 25, "area": "Realistic", "text": "Assemble electronic parts" },
  { "index": 26, "area": "Realistic", "text": "Drive a truck to deliver packages to offices and homes" },
  { "index": 27, "area": "Investigative", "text": "Examine blood samples using a microscope" },
  { "index": 28, "area": "Investigative", "text": "Investigate the cause of a fire" },
  { "index": 29, "area": "Artistic", "text": "Create special effects for movies" },
  { "index": 30, "area": "Artistic", "text": "Paint sets for plays" },
  { "index": 31, "area": "Social", "text": "Do volunteer work at a non-profit organization" },
  { "index": 32, "area": "Social", "text": "Teach children how to play sports" },
  { "index": 33, "area": "Enterprising", "text": "Start your own business" },
  { "index": 34, "area": "Enterprising", "text": "Negotiate business contracts" },
  { "index": 35, "area": "Conventional", "text": "Keep shipping and receiving records" },
  { "index": 36, "area": "Conventional", "text": "Calculate the wages of employees" },
  { "index": 37, "area": "Realistic", "text": "Test the quality of parts before shipment" },
  { "index": 38, "area": "Realistic", "text": "Repair and install locks" },
  { "index": 39, "area": "Investigative", "text": "Develop a way to better predict the weather" },
  { "index": 40, "area": "Investigative", "text": "Work in a biology lab" },
  { "index": 41, "area": "Artistic", "text": "Write scripts for movies or television shows" },
  { "index": 42, "area": "Artistic", "text": "Perform jazz or tap dance" },
  { "index": 43, "area": "Social", "text": "Teach sign language to people who are deaf or hard of hearing" },
  { "index": 44, "area": "Social", "text": "Help conduct a group therapy session" },
  { "index": 45, "area": "Enterprising", "text": "Represent a client in a lawsuit" },
  { "index": 46, "area": "Enterprising", "text": "Market a new line of clothing" },
  { "index": 47, "area": "Conventional", "text": "Inventory supplies using a hand-held computer" },
  { "index": 48, "area": "Conventional", "text": "Record rent payments" },
  { "index": 49, "area": "Realistic", "text": "Set up and operate machines to make products" },
  { "index": 50, "area": "Realistic", "text": "Put out forest fires" },
  { "index": 51, "area": "Investigative", "text": "Invent a replacement for sugar" },
  { "index": 52, "area": "Investigative", "text": "Do laboratory tests to identify diseases" },
  { "index": 53, "area": "Artistic", "text": "Sing in a band" },
  { "index": 54, "area": "Artistic", "text": "Edit movies" },
  { "index": 55, "area": "Social", "text": "Take care of children at a day-care center" },
  { "index": 56, "area": "Social", "text": "Teach a high-school class" },
  { "index": 57, "area": "Enterprising", "text": "Sell merchandise at a department store" },
  { "index": 58, "area": "Enterprising", "text": "Manage a clothing store" },
  { "index": 59, "area": "Conventional", "text": "Keep inventory records" },
  { "index": 60, "area": "Conventional", "text": "Stamp, sort, and distribute mail for an organization" }
];

function PsychometricTest() {


  const navigate=useNavigate();

  

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState("");

  const handleAnswer = (answer) => {
    // Concatenate the new answer directly to the string
    setAnswers((prev) => prev + answer);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      console.log("Final answers:", answers + answer);
      // Perform your final submit logic here if needed
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const submitAnswer = async () => {
 
    try {
      console.log(answers)
      console.log("reached here")
    
      navigate('/psychometric-test/result', { state: { answers } });
    } catch (error) {
      setError('Failed to submit answers. Please try again.');
    } f
  };

  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const allQuestionsAnswered = answers.length === questions.length; 

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 pt-16">
      <div className="flex flex-col text-center text-zinc-900 max-w-[35vw] w-full">
        <h1 className="text-lg font-extrabold tracking-tight">Psychometric Test</h1>
        <p className="mt-1 text-sm font-normal">
          Indicate your likings about these specific works
        </p>
      </div>

      <div className="flex flex-col items-center justify-center mt-8 w-full max-w-[35vw] text-zinc-900">
        <h2 className="text-[18px] font-extrabold tracking-tight text-center w-[30vw] leading-[20px] h-[6vh] flex items-center justify-center">
          {questions[currentQuestionIndex].text}
        </h2>

        <div className="flex flex-col w-[95%]">
        
          {options.map((option) => (
            <div
            
              key={option.id}
              className={`h-12 cursor-pointer flex flex-col justify-center mt-[1.4vh] w-[95%] rounded-lg select-none border-2 hover:bg-[#4CC9B3] ${
                answers[currentQuestionIndex] === option.id
                  ? "bg-teal-400 text-white"
                  : "border-teal-400"
              }`}
              onClick={() => handleAnswer(option.id)}
            >
              <div className="flex justify-start items-center p-4 gap-3 hover:text-white">
              <div className=" hover:fill-white ">
        {option.emoji}
      </div>
              {option.text}
                </div>
            </div>
          ))}
        </div>

        <ProgressBar
          currentQuestion={currentQuestionIndex + 1}
          totalQuestions={questions.length}
        />

        <div className="flex items-center justify-center gap-6 mt-4 w-full max-w-full">
          <button
            className="rounded-md disabled:opacity-50"
            onClick={goToPreviousQuestion}
            disabled={currentQuestionIndex === 0}
          >
            <div className="flex gap-1 hover:scale-105 select-none text-base items-center justify-center">
            <ChevronLeft className="text-black " size={20}/>
            <span className="text-[14px] leading-[16px]">Prev</span>
            </div>

           
          </button>

          <button
            className="rounded-md disabled:opacity-50"
            onClick={goToPreviousQuestion}
            disabled={currentQuestionIndex === 0}
          >
            <div className="flex gap-1 hover:scale-105 select-none text-base items-center justify-center">
            <span className="text-[14px] leading-[16px]">Next</span>
            <ChevronRight className="text-black " size={20}/>
            
            </div>

           
          </button>
          
        </div>
        {isLastQuestion && allQuestionsAnswered ? (
            <button
              className="px-4 py-2 bg-green-500 text-white rounded-md mt-5"
              onClick={ submitAnswer}
            >
              Submit
            </button>
          ) : null}
      </div>

      <Footer />
    </div>
  );
}

export default PsychometricTest;
