// import { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";
// import SideBar from "../components/SideBar";
// import BotHeader from "../components/BotHeader";
// import { CircleArrowRight } from "lucide-react";
// import { motion } from "framer-motion";
// import { Pie } from "react-chartjs-2"; 
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import Header from "../components/Header";


// ChartJS.register(ArcElement, Tooltip, Legend);

// const ResultPage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { answerString } = location.state || {};

//   const [result, setResult] = useState(null);
//   const [result1, setResult1] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);


//   const [hoveredCard, setHoveredCard] = useState(null);

//   const cards = [
//     {
//       title: "Realistic",
//       color: "#FF6384",
//       details:
//         "People with Realistic interests like work that includes practical, hands-on problems and answers. Often people with Realistic interests do not like careers that involve paperwork or working closely with others. They like working with plants and animals; real-world materials like wood, tools, and machinery; and outside work",
//     },
//     {
//       title: "Investigative",
//       color: "#36A2EB",
//       details:
//         "People with Investigative interests like work that has to do with ideas and thinking rather than physical activity or leading people. They like searching for facts and figuring out problems.",
//     },
//     {
//       title: "Artistic",
//       color: "#FFCE56",
//       details:
//         "People with Artistic interests like work that deals with the artistic side of things, such as acting, music, art, and design. They like creativity in their work and work that can be done without following a set of rules",
//     },
//     {
//       title: "Social",
//       color: "#4BC0C0",
//       details:
//         "People with Social interests like working with others to help them learn and grow. They like working with people more than working with objects, machines, or information. They like teaching, giving advice, and helping and being of service to people.",
//     },
//     {
//       title: "Enterprising",
//       color: "#9966FF",
//       details:
//         "People with Enterprising interests like work that has to do with starting up and carrying out business projects. These people like taking action rather than thinking about things. They like persuading and leading people, making decisions, and taking risks for profits.",
//     },
//     {
//       title: "Conventional",
//       color: "#FF9F40",
//       details:
//         "People with Conventional interests like work that follows set procedures and routines. They prefer working with information and paying attention to details rather than working with ideas. They like working with clear rules and following a strong leader.",
//     },
//   ];

  
//   const fetchResults = async (url, setter) => {
//     setLoading(true);
//     try {
//       const response = await axios.get(url);
//       setter(response.data);
//     } catch (err) {
//       setError("Failed to fetch data. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (!answerString) return;

//     fetchResults(
//       `${import.meta.env.VITE_API_URL}/api/results?answers=${answerString}`,
//       setResult1
//     );

//     fetchResults(
//       `${import.meta.env.VITE_API_URL}/api/careers?answers=${answerString}`,
//       setResult
//     );
//   }, [answerString]);

//   const careerInfo =
//     result?.careers?.career?.map((career) => ({
//       title: career.title,
//       code: career.code,
//       fit: career.$?.fit || "N/A",
//       href: career.$?.href,
//       tags: career.tags?.$ || {},
//     })) || [];

//   const handleCareerClick = (careerCode) => {
//     navigate(`/careers/${careerCode}`);
//   };

//   const chartData = result1
//     ? {
//         labels: result1.results.result.map((r) => r.area),
//         datasets: [
//           {
//             label: "Interest Areas",
//             data: result1.results.result.map((r) => parseInt(r.score)),
//             backgroundColor: [
//               "#FF6384",
//               "#36A2EB",
//               "#FFCE56",
//               "#4BC0C0",
//               "#9966FF",
//               "#FF9F40",
//             ],
//             hoverBackgroundColor: [
//               "#FF6384",
//               "#36A2EB",
//               "#FFCE56",
//               "#4BC0C0",
//               "#9966FF",
//               "#FF9F40",
//             ],
//           },
//         ],
//       }
//     : null;

//   return (
//     <div className="w-full bg-red-400 h-screen overflow-hidden flex justify-center text-white"
//     style={{ fontFamily: 'Futura Now Headline' }}>
                

//       <div className="flex w-full">
        
//         <div className="flex flex-col items-center w-[100vw] text-black">
//         <Header />
//          <div>
//          <h1 className="text-2xl h-[10vh] font-bold tracking-wide">Result</h1>
//           <p>Great you have completed the test! Here's your result</p>
//           <h1 className="text-[#4CC9B3]">Recommended Career Options</h1>
//          </div>
//           <main className="flex-grow flex w-full overflow-y-scroll">
//             {chartData && (
//               <div className="flex flex-col items-center justify-center ">
               
//                 <Pie data={chartData} />
              
                
//                 <div className="flex flex-col gap-3 mt-[10vh]">
     
//       <div className="grid grid-cols-3 gap-2">
//         {cards.map((card) => (
//           <div
//             key={card.title}
//             className="rounded-md h-[25vh] w-[12vw] text-2xl flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300"
//             style={{ backgroundColor: card.color }}
//             onMouseEnter={() => setHoveredCard(card)}
//             onMouseLeave={() => setHoveredCard(null)}
//           >
//             <h3>{card.title}</h3>
//           </div>
//         ))}
//       </div>

      
//       <div className=" p-2 rounded-md text-white w-[37vw] h-[20vh]">
//         <p>
//           {hoveredCard
//             ? hoveredCard.details
//             : "Hover over a card to see more information."}
//         </p>
//       </div>
//     </div>
//               </div>
//             )}

//             {loading && (
//               <p className="text-center">Getting Best Careers For You...</p>
//             )}
//             {error && <p className="text-center text-red-500">{error}</p>}
//             {!loading && !error && careerInfo.length > 0 ? (
//               <ul className="career-list space-y-4">
//                 {careerInfo.map((career, index) => (
//                   <motion.li
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: index * 0.1, duration: 0.5 }}
//                     key={index}
//                     className="career-item bg-[#2c2d2c] hover:bg-[#343535] rounded-lg p-4 transition-colors duration-300 cursor-pointer"
//                     onClick={() => handleCareerClick(career.code)}
//                   >
//                     <div className="flex justify-between items-center">
//                       <h3 className="text-lg font-bold">{career.title}</h3>
//                       <CircleArrowRight />
//                     </div>
//                     {career.apprenticeship && (
//                       <ul className="tags flex flex-wrap mt-2 gap-2">
//                         <li className="bg-blue-600 text-white text-xs px-2 py-1 rounded">
//                           Apprenticeships: {career.apprenticeship}
//                         </li>
//                       </ul>
//                     )}
//                   </motion.li>
//                 ))}
//               </ul>
//             ) : (
//               <p></p>
//             )}
//           </main>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResultPage;







import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { CircleArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from "chart.js";
import Header from "../components/Header";


import { Bar } from "react-chartjs-2";


ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { answerString } = location.state || {};

  const [result, setResult] = useState(null);
  const [result1, setResult1] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const cards = [
    // Card definitions remain unchanged
  ];

  const fetchResults = async (url, setter) => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      setter(response.data);
    } catch (err) {
      setError("Failed to fetch data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!answerString) return;

    fetchResults(
      `${import.meta.env.VITE_API_URL}/api/results?answers=${answerString}`,
      setResult1
    );

    fetchResults(
      `${import.meta.env.VITE_API_URL}/api/careers?answers=${answerString}`,
      setResult
    );
  }, [answerString]);

  const careerInfo =
    result?.careers?.career?.map((career) => ({
      title: career.title,
      code: career.code,
      fit: career.$?.fit || "N/A",
      href: career.$?.href,
      tags: career.tags?.$ || {},
    })) || [];

  const handleCareerClick = (careerCode) => {
    navigate(`/careers/${careerCode}`);
  };

  const chartData = result1
    ? {
        labels: result1.results.result.map((r) => r.area),
        datasets: [
          {
            label: "Interest Areas",
            data: result1.results.result.map((r) => parseInt(r.score)),
            backgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              "#4BC0C0",
              "#9966FF",
              "#FF9F40",
            ],
            hoverBackgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              "#4BC0C0",
              "#9966FF",
              "#FF9F40",
            ],
          },
        ],
      }
    : null;

  return (
//     <div className="w-full  flex flex-col bg-[#FFFFFF] text-black overflow-hidden">
//       <Header />
//       <div className="flex-grow grid grid-cols-2 gap-4 p-4 ">
//         {/* Left - Career List */}
//         <div className="col-span-1 bg-white rounded-lg shadow p-4 overflow-y-auto border-black border">
//           <h2 className="text-xl font-semibold mb-4">Best Jobs For You</h2>
//           {loading && <p>Loading...</p>}
//           {error && <p className="text-red-500">{error}</p>}
//           {!loading && !error && careerInfo.length > 0 ? (
//             <ul className="space-y-1 h-[90vh] overflow-y-auto">
//               {careerInfo.map((career, index) => (
//                 <motion.li
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.1, duration: 0.5 }}
//                   key={index}
//                   className="bg-gray-100 hover:bg-gray-200 rounded-lg p-3 cursor-pointer transition border border-gray-400"
//                   onClick={() => handleCareerClick(career.code)}
//                 >
//                   <div className="flex justify-between items-center">
//                     <h3 className="text-lg ">{career.title}</h3>
//                     <CircleArrowRight />
//                   </div>
//                 </motion.li>
//               ))}
//             </ul>
//           ) : (
//             <p>No careers found</p>
//           )}
//         </div>

       

//         {/* Right - Chart */}
//         <div className="flex gap-2 flex-col">
        

//         <div className="flex gap-2 flex-col">
//   <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center justify-center h-[40vh]">
//     <h2 className="text-lg font-semibold">Your Career Fit</h2>
//     {chartData && <Bar data={chartData} />}
//   </div>
// </div>

//         <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center justify-center">
//               <h1 className="text-bold">About Skills</h1>

//               <h3 className="text-[#4C6FC9]">Realistic (R)</h3>
//               <p>Realistic individuals enjoy working with their hands, tools, and machinery. They prefer practical, physical activities and excel in roles that involve building, repairing, or working outdoors. These individuals thrive in structured environments where tangible results are achieved.</p>

//               <h3 className="text-[#4CC959]">Investigative (I)</h3>
//               <p>Investigative people are curious and analytical, often drawn to solving problems and understanding complex systems. They excel in research, data analysis, and roles that require critical thinking and intellectual exploration. These individuals thrive in environments that challenge their minds.</p>

//               <h3 className="text-[#8B4CC9]">Artistic (A)</h3>
//               <p>Artistic individuals are creative and expressive, thriving in environments that allow for imagination and originality. They excel in roles involving design, writing, music, or performance, where unconventional thinking and artistic freedom are valued.</p>

//               <h3 className="text-[#C94C79]">Social (S)</h3>
//               <p>Social individuals enjoy helping others and are often empathetic and communicative. They excel in roles like teaching, counseling, or healthcare, where they can foster connections and contribute to personal or community well-being.</p>

//               <h3 className="text-[#4CC9C9]">Enterprising (E)</h3>
//               <p>Enterprising individuals are persuasive and ambitious, thriving in leadership and decision-making roles. They excel in fields like business, sales, or law, where influencing others, taking risks, and managing projects are key.</p>

//               <h3 className="text-[#F9BC5F]">Conventional (C)</h3>
//               <p>Conventional individuals are organized and detail-oriented, preferring structured environments with clear procedures. They excel in administrative, accounting, or clerical roles, where efficiency and accuracy are essential.</p>
//         </div>
//         </div>
//       </div>
//     </div>

<div className="w-full flex flex-col bg-white text-[#333333] overflow-hidden">
  <Header />

  <div className="mx-auto flex items-center flex-col justify-center">
  <h1 className="font-bold text-2xl">Results</h1>
  <p className="text-sm">Congrats for completing the test! Here's your result</p>
  <h1 className="text-[#4CC9B3] text-lg font-semibold">Recommended Career Options</h1>
  </div>

  <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
    {/* Left - Career List */}
    <div className="col-span-1 bg-white rounded-xl shadow-lg p-6 overflow-y-auto border border-gray-200">
      <h2 className="text-2xl font-bold mb-4">Best Jobs For You</h2>
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-600">{error}</p>}
      {!loading && !error && careerInfo.length > 0 ? (
        <ul className="space-y-3 ">
          {careerInfo.map((career, index) => (
            <motion.li
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              key={index}
              className=" text-black hover:bg-gradient-to-r hover:bg-gray-300 rounded-lg p-4 cursor-pointer transition transform hover:scale-105 shadow-md"
              onClick={() => handleCareerClick(career.code)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">{career.title}</h3>
                <CircleArrowRight />
              </div>
            </motion.li>
          ))}
        </ul>
      ) : (
        <p>No careers found</p>
      )}
    </div>

    {/* Right - Chart and Skills Info */}
    <div className="flex flex-col gap-6">
      {/* Chart Section */}
      <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center h-[50vh] w-[80%]">
        <h2 className="text-xl font-semibold mb-4">Your Career Fit</h2>
        {chartData && (
          <Bar
            data={chartData}
            options={{
              plugins: {
                legend: { display: false },
              },
              responsive: true,
              maintainAspectRatio: false,
            }}
          />
        )}
      </div>

      {/* Skills Info */}
      <div className="bg-white rounded-xl shadow-lg p-6 ">
        <h1 className="text-2xl font-bold mb-4">About Skills</h1>
        {[
          { label: "Realistic (R)", color: "#4C6FC9", text: "Realistic individuals enjoy working with their hands, tools, and machinery. They prefer practical, physical activities and excel in roles that involve building, repairing, or working outdoors. These individuals thrive in structured environments where tangible results are achieved." },
          { label: "Investigative (I)", color: "#4CC959", text: "Investigative people are curious and analytical, often drawn to solving problems and understanding complex systems. They excel in research, data analysis, and roles that require critical thinking and intellectual exploration. These individuals thrive in environments that challenge their minds." },
          { label: "Artistic (A)", color: "#8B4CC9", text: "Artistic individuals are creative and expressive, thriving in environments that allow for imagination and originality. They excel in roles involving design, writing, music, or performance, where unconventional thinking and artistic freedom are valued." },
          { label: "Social (S)", color: "#C94C79", text: "Social individuals enjoy helping others and are often empathetic and communicative. They excel in roles like teaching, counseling, or healthcare, where they can foster connections and contribute to personal or community well-being." },
          { label: "Enterprising (E)", color: "#4CC9C9", text: "Enterprising individuals are persuasive and ambitious, thriving in leadership and decision-making roles. They excel in fields like business, sales, or law, where influencing others, taking risks, and managing projects are key." },
          { label: "Conventional (C)", color: "#F9BC5F", text: "Conventional individuals are organized and detail-oriented, preferring structured environments with clear procedures. They excel in administrative, accounting, or clerical roles, where efficiency and accuracy are essential." },
         
          // Add other skill descriptions here...
        ].map((skill, idx) => (
          <div key={idx} className="mb-4">
            <h3 className={`text-lg font-semibold text-[${skill.color}]`}>{skill.label}</h3>
            <p className="text-gray-700">{skill.text}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>


);
};

export default ResultPage;
