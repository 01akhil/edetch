// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import fore_cleanup from "../assets/fore_cleanup.png";
// import { Search } from "lucide-react";
// import ContactUs from "../components/ContactUs";
// import Marquee from "../components/Marquee";

// const LandingPage = () => {
//   const navigate = useNavigate();
//   const [searchQuery, setSearchQuery] = useState("");
//   const [typedText, setTypedText] = useState("");
//   const headingText = "CConfusion to Clarity";

//   const handleTakeTest = () => {
//     navigate("/pschometric-test");
//   };

//   const handleExplore = () => {
//     navigate("/explore");
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();

//     console.log("Searching for:", searchQuery);
//   };

//   useEffect(() => {
//     let index = 0;
//     const intervalId = setInterval(() => {
//       if (index < headingText.length) {
//         setTypedText((prev) => prev + headingText.charAt(index));
//         index += 1;
//       } else {
//         clearInterval(intervalId);
//       }
//     }, 50);
//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <div
//       className="w-full min-h-screen bg-cover bg-center bg-no-repeat overflow-x-hidden"
//       style={{ backgroundImage: `url(${fore_cleanup})` }}
//     >
//       {/* Navigation or Initial Button (positioned top-right) */}
//       <div className="absolute top-8 right-8 z-10 flex">
//         <button
//           onClick={handleExplore} // Trigger the navigation on click
//           className="text-[#fbfbfae7] font-semibold text-lg underline hover:text-[#00aaff] transition-all duration-300"
//         >
//           Explore
//         </button>
//       </div>

//       <div className="w-full h-[100vh] flex flex-col items-center justify-center text-[#fbfbfae7] space-y-6 px-6">
//         {/* The text with typing effect applied to the heading */}
//         <h1 className="text-5xl font-bold text-center max-w-xl">{typedText}</h1>

//         {/* Paragraph with static text */}
//         <p className="text-xl text-center max-w-2xl">
//           A place to suggest the best personalized roadmaps, careers, and
//           resources to students.
//         </p>

//         <form onSubmit={handleSearch} className="w-[80%] md:w-[40%] relative">
//           <input
//             type="text"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             placeholder="Search for careers, tests, or resources..."
//             className="w-full py-2 pl-4 pr-10 border-b-2 border-white bg-transparent text-white placeholder-[#fbfbfae7] focus:outline-none focus:border-[#00aaff] transition-all duration-300"
//           />

//           <button
//             type="submit"
//             className="absolute right-0 top-0 py-2 px-4 text-[#00aaff] hover:text-[#00aaff]"
//           >
//             <Search />
//           </button>
//         </form>

//         <button
//           onClick={handleTakeTest}
//           className="text-white w-[10vw] py-1 border-2 border-[#dcdcdc] bg-gradient-to-r from-[#080908] via-[#313131] to-[#080908] glowing-border rounded-lg text-md font-semibold hover:scale-105 transition-transform duration-300 h-[6vh]"
//         >
//           Take Test
//         </button>
//       </div>

//       <Marquee />
//       <ContactUs />
//     </div>
//   );
// };

// export default LandingPage;










import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import fore_cleanup from "../assets/fore_cleanup.png";
import { Search } from "lucide-react";
import ContactUs from "../components/ContactUs";
import Marquee from "../components/Marquee";

const LandingPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [typedText, setTypedText] = useState("");
  const headingText = "Coonfusion to Clarity";

  const handleTakeTest = () => {
    navigate("/pschometric-test");
  };

  const handleExplore = () => {
    navigate("/explore");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      if (index < headingText.length) {
        setTypedText((prev) => prev + headingText.charAt(index));
        index += 1;
      } else {
        clearInterval(intervalId);
      }
    }, 50);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat overflow-x-hidden"
      style={{ backgroundImage: `url(${fore_cleanup})` }}
    >
      {/* Navigation or Initial Button (positioned top-right) */}
      <div className="absolute top-4 right-4 z-10 flex">
        <button
          onClick={handleExplore}
          className="text-white font-semibold text-sm sm:text-lg underline hover:text-[#00aaff] transition-all duration-300"
        >
          Explore
        </button>
      </div>

      {/* Main Content */}
      <div className="w-full min-h-[90vh] flex flex-col items-center justify-center text-white px-6 space-y-6">
        {/* Typing Effect for Heading */}
        <h1 className="text-3xl sm:text-5xl font-bold text-center max-w-xl">
          {typedText}
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-xl text-center max-w-2xl">
          A place to suggest the best personalized roadmaps, careers, and
          resources to students.
        </p>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="w-full sm:w-[60%] md:w-[40%] relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for careers, tests, or resources..."
            className="w-full py-2 pl-4 pr-10 border-b-2 border-white bg-transparent text-white placeholder-gray-300 focus:outline-none focus:border-[#00aaff] transition-all duration-300"
          />
          <button
            type="submit"
            className="absolute right-2 top-2 text-[#00aaff] hover:text-[#0077cc] transition-all"
          >
            <Search />
          </button>
        </form>

        {/* Take Test Button */}
        <button
          onClick={handleTakeTest}
          className="w-[70%] sm:w-[40%] md:w-[20%] py-2 bg-gradient-to-r from-[#080908] via-[#313131] to-[#080908] glowing-border border-2 border-gray-300 rounded-lg text-md font-semibold hover:scale-105 transition-transform duration-300"
        >
          Take Test
        </button>
      </div>

      <Marquee />
      <ContactUs />
    </div>
  );
};

export default LandingPage;
