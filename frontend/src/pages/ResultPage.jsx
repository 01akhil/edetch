import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import SideBar from "../components/SideBar";
import BotHeader from "../components/BotHeader";
import { CircleArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Pie } from "react-chartjs-2"; 
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";


ChartJS.register(ArcElement, Tooltip, Legend);

const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { answerString } = location.state || {};

  const [result, setResult] = useState(null);
  const [result1, setResult1] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [showPopup, setShowPopup] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const cards = [
    {
      title: "Realistic",
      color: "#FF6384",
      details:
        "People with Realistic interests like work that includes practical, hands-on problems and answers. They often prefer working with plants and animals, and real-world materials like wood, tools, and machinery.",
    },
    {
      title: "Investigative",
      color: "#36A2EB",
      details:
        "People with Investigative interests enjoy work that involves theory, research, and intellectual inquiry. They prefer tasks that involve thinking, exploring, and analyzing.",
    },
    {
      title: "Artistic",
      color: "#FFCE56",
      details:
        "People with Artistic interests like work that involves creativity, originality, and self-expression. They enjoy music, art, writing, and performing.",
    },
    {
      title: "Social",
      color: "#4BC0C0",
      details:
        "People with Social interests prefer work that involves helping, teaching, and providing services to others. They enjoy working in supportive roles.",
    },
    {
      title: "Enterprising",
      color: "#9966FF",
      details:
        "People with Enterprising interests enjoy work that involves leadership, business, and persuasion. They are drawn to tasks that involve starting and managing projects.",
    },
    {
      title: "Conventional",
      color: "#FF9F40",
      details:
        "People with Conventional interests like work that involves organization, planning, and data management. They prefer structured tasks and routines.",
    },
  ];

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedCard(null);
  };

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
    <div className="w-full h-screen overflow-hidden flex justify-center bg-[#1a1a1a] text-white">
      <div className="flex w-full">
        <SideBar />
        <div className="flex flex-col items-center w-[80vw] text-white">
          <BotHeader />

          <h1 className="text-2xl h-[10vh]">Best Careers For You</h1>
          <main className="flex-grow w-full h-screen overflow-y-scroll">
            {chartData && (
              <div className="flex items-center justify-center w-[100%] h-[70vh] mb-[10vh]">
                <Pie data={chartData} />
                <div className="grid grid-cols-3 gap-2">
                  {cards.map((card) => (
                    <div
                      key={card.title}
                      className="rounded-md h-[25vh] w-[12vw] text-2xl flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300"
                      style={{ backgroundColor: card.color }}
                      onClick={() => handleCardClick(card)}
                    >
                      <h3>{card.title}</h3>
                    </div>
                  ))}

                  {showPopup && selectedCard && (
                    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
                      <div className="bg-white rounded-md p-6 w-[50vw] text-black">
                        <h3 className="text-2xl font-bold">
                          {selectedCard.title} Interest Details
                        </h3>
                        <p className="mt-4 text-lg">{selectedCard.details}</p>
                        <button
                          className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                          onClick={closePopup}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {loading && (
              <p className="text-center">Getting Best Careers For You...</p>
            )}
            {error && <p className="text-center text-red-500">{error}</p>}
            {!loading && !error && careerInfo.length > 0 ? (
              <ul className="career-list space-y-4">
                {careerInfo.map((career, index) => (
                  <motion.li
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    key={index}
                    className="career-item bg-[#2c2d2c] hover:bg-[#343535] rounded-lg p-4 transition-colors duration-300 cursor-pointer"
                    onClick={() => handleCareerClick(career.code)}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-bold">{career.title}</h3>
                      <CircleArrowRight />
                    </div>
                    {career.apprenticeship && (
                      <ul className="tags flex flex-wrap mt-2 gap-2">
                        <li className="bg-blue-600 text-white text-xs px-2 py-1 rounded">
                          Apprenticeships: {career.apprenticeship}
                        </li>
                      </ul>
                    )}
                  </motion.li>
                ))}
              </ul>
            ) : (
              <p className="text-center">No careers found.</p>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
