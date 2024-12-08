import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Define the answer options
const answerOptions = [
  { value: 1, label: "Strongly Dislike" },
  { value: 2, label: "Dislike" },
  { value: 3, label: "Unsure" },
  { value: 4, label: "Like" },
  { value: 5, label: "Strongly Like" }
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

const Test = () => {

 

  const [answers, setAnswers] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const careerInfo = result?.careers?.career.map(career => ({
    career: career.title,
    fit: career.$.fit
  }));

  // Handle selection change
  const handleChange = (questionIndex, value) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: value
    }));

    // Automatically go to next question
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  // Generate the answer string
  const generateAnswerString = () => {
    let answerString = '';
    for (let i = 1; i <= questions.length; i++) {
      answerString += answers[i] || '0';  // Default to '0' if no answer is selected
    }
    return answerString;
  };

  // Submit answers to the server
  const submitAnswers = async () => {
    setLoading(true);
    setError(null);
    const answerString = generateAnswerString();

    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/careers?answers=${answerString}`);
      console.log(response.data)
      setResult(response.data);
    } catch (error) {
      setError('Failed to fetch data from the server. Please try again later.');
    } finally {
      setLoading(false);
    }
  };
 
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };

  return (
    <div style={{
      background: "linear-gradient(135deg, #111a19, #1b2928, #2a3d3c)",
    }} className=" w-[100vw] h-[100vh] flex flex-col items-center justify-center">
     
      {/* Display the current question */}
      <div className="mb-4">
        <div className='fixed '>
        <p className="font-bold  text-2xl lg:text-4xl xl:text-4xl text-white w-[100vw] mb-10">{questions[currentQuestionIndex].text}</p>
        </div>
        
        <div className=''>
        <div className="flex-col md:flex-row lg:flex-row xl:flex flex-wrap mt-20">
          {answerOptions.map((option) => (
            <label  key={option.value} className=" mr-4 mb-2 border-2 hover:bg-blue-700 xl:w-[12vw] lg:w-[12vw] rounded-md h-[10vh] flex items-center justify-center text-white text-xl">
              <input
                className='hidden'
                type="radio"
                name={`question-${questions[currentQuestionIndex].index}`}
                value={option.value}
                onChange={() => handleChange(questions[currentQuestionIndex].index, option.value)}
                checked={answers[questions[currentQuestionIndex].index] === option.value}
              />
              {option.label}
            </label>
          ))}
        </div>
        </div>
      </div>

      {/* Submit answers only when on the last question */}
      {currentQuestionIndex === questions.length - 1 && (
        <button
          onClick={submitAnswers}
          className="bg-green-500 w-[10vw] h-[7vh] text-white py-2 px-4 rounded-2xl mt-4"
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Submit'}
        </button>
      )}

      {loading && <p className="mt-4">Submitting your answers...</p>}

      {error && <p className="mt-4 text-red-500">{error}</p>}

      {careerInfo && (
        <div style={{
          background: "linear-gradient(135deg, #111a19, #1b2928, #2a3d3c)",
        }} className="mt-[70vh] w-[100vw] p-12 pb-20">
          <button
          onClick={handleHome}
          className="text-white font-semibold fixed right-10 text-sm sm:text-lg hover:text-[#00aaff] transition-all duration-300"
        >
          Home
        </button>
          <div className='grid word-wrap'>
          <h2 className="text-3xl font-semibold text-white ">Best Careers for you</h2>
          <div className="space-y-4 mt-4 text-gray-50">
            
            {careerInfo.map((item, index) => (
              <div key={index} className="flex justify-between border-b py-2">
                <span className="font-medium">{item.career}</span>
                <span className="text-sm text-gray-300">{item.fit}</span>
              </div>
            ))}
          </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Test;
