import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { CircleArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from "chart.js";
import Header from "../components/Header";
import Loader from "../components/Loader";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { answerString } = location.state || {};

  const [result, setResult] = useState(null);
  const [result1, setResult1] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
    <div className="w-full flex flex-col bg-white text-[#333333] overflow-hidden">
      <Header />

      {loading && (
        <div className="flex justify-center items-center h-screen">
          <Loader />
        </div>
      )}

      {!loading && (
        <>
          <div className="mx-auto flex items-center flex-col justify-center">
            <h1 className="font-bold text-2xl">Results</h1>
            <p className="text-sm">Congrats for completing the test! Here's your result</p>
            <h1 className="text-[#4CC9B3] text-lg font-semibold">Recommended Career Options</h1>
          </div>

          <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
            {/* Left - Career List */}
            <div className="col-span-1 bg-white rounded-xl shadow-lg p-6 overflow-y-auto border border-gray-200">
              <h2 className="text-2xl font-bold mb-4">Best Jobs For You</h2>
              {error && <p className="text-center text-red-600">{error}</p>}
              {!error && careerInfo.length > 0 ? (
                <ul className="space-y-3">
                  {careerInfo.map((career, index) => (
                    <motion.li
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      key={index}
                      className="text-black hover:bg-gradient-to-r hover:bg-gray-300 rounded-lg p-4 cursor-pointer transition transform hover:scale-105 shadow-md"
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
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ResultPage;
