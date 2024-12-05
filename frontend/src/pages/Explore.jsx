import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import fore_cleanup from "../assets/fore_cleanup.png";
import { ExternalLink } from "lucide-react";

import { CheckCircle } from "lucide-react";
import SearchBar from "../components/SearchBar";

const Explore = () => {
  const data = [
    {
      logo: "data:image/png;base64,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",
      productName: "Product Name",
      noOfStars: 5,
      description:
        "This is a brief description of the product.sdgbsjhgbf sjdgbgjdfsgb jfgfbgkdfgbkdjf gjkfdbgnkjlgnkfnbkljdsahfndsflhnasdkljgbnfdkjgbndfklgjkfhdgjkhdafnjgkhnadfkjhfdngjksdkfsdhfk",
    },
  ];

  const navigate = useNavigate();

  const [selectedCategories, setSelectedCategories] = useState(new Set());

  const toggleCategorySelection = (category) => {
    setSelectedCategories((prevSelectedCategories) => {
      const updatedCategories = new Set(prevSelectedCategories);
      if (updatedCategories.has(category)) {
        updatedCategories.delete(category);
      } else {
        updatedCategories.add(category);
      }
      return updatedCategories;
    });
  };

  return (
    <div
      className="w-[100vw] min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${fore_cleanup})` }}
    >
      <SearchBar />

      <div className="w-[100vw] h-[90vh] flex items-center justify-center gap-2">
        <div className="w-[18vw] h-[90vh] border-2 border-[#ffffffa9] rounded-md ">
          <div className="flex w-full h-[10vh] items-center justify-between p-4 border-b-2 border-[#ffffff8c] ">
            <h1 className="text-white text-lg font-semibold">Categories</h1>
          </div>

          <div className="w-full h-[78vh] overflow-y-auto overflow-x-hidden">
            <div className="p-4 border-b-[#ffffff8c] border-b-2 cursor-pointer">
              <h2 className="text-[#d1cfcf] text-sm mb-4">Web Development</h2>
              <div className="space-y-3 ml-5">
                {["Front-End", "Back-End", "Full-Stack"].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 transition-all duration-300 hover:scale-105 hover:text-[#00aaff]"
                    onClick={() => toggleCategorySelection(item)}
                  >
                    <span
                      className={`w-[20px] h-[20px] rounded-full border-2 ${
                        selectedCategories.has(item)
                          ? "border-[#00aaff]"
                          : "border-white"
                      } bg-transparent flex items-center justify-center`}
                    >
                      {selectedCategories.has(item) && (
                        <CheckCircle className="text-[#00aaff] w-4 h-4" />
                      )}
                    </span>
                    <h3 className="text-white text-sm">{item}</h3>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 border-b-[#ffffff8c] border-b-2 cursor-pointer">
              <h2 className="text-[#d1cfcf] text-sm mb-4">Finance</h2>
              <div className="space-y-3 ml-5">
                {["Accounting Tools", "Data Analysis Tools", "Courses"].map(
                  (item, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 transition-all duration-300 hover:scale-105 hover:text-[#00aaff]"
                      onClick={() => toggleCategorySelection(item)}
                    >
                      <span
                        className={`w-[20px] h-[20px] rounded-full border-2 ${
                          selectedCategories.has(item)
                            ? "border-[#00aaff]"
                            : "border-white"
                        } bg-transparent flex items-center justify-center`}
                      >
                        {selectedCategories.has(item) && (
                          <CheckCircle className="text-[#00aaff] w-4 h-4" />
                        )}
                      </span>
                      <h3 className="text-white text-sm">{item}</h3>
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="p-4 border-b-[#ffffff8c] border-b-2 cursor-pointer">
              <h2 className="text-[#d1cfcf] text-sm mb-4">Web3</h2>
              <div className="space-y-3 ml-5">
                {[
                  "Blockchain platforms",
                  "Smart Contract development",
                  "Wallets",
                  "NFT Development",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 transition-all duration-300 hover:scale-105 hover:text-[#00aaff]"
                    onClick={() => toggleCategorySelection(item)}
                  >
                    <span
                      className={`w-[20px] h-[20px] rounded-full border-2 ${
                        selectedCategories.has(item)
                          ? "border-[#00aaff]"
                          : "border-white"
                      } bg-transparent flex items-center justify-center`}
                    >
                      {selectedCategories.has(item) && (
                        <CheckCircle className="text-[#00aaff] w-4 h-4" />
                      )}
                    </span>
                    <h3 className="text-white text-sm">{item}</h3>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 border-b-[#ffffff8c] border-b-2 cursor-pointer">
              <h2 className="text-[#d1cfcf] text-sm mb-4">Data Science</h2>
              <div className="space-y-3 ml-5">
                {[
                  "Data Manipulation Tools",
                  "Data Visualization",
                  "Big Data Tools",
                  "Web Scrapping",
                  "Data Collection",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 transition-all duration-300 hover:scale-105 hover:text-[#00aaff]"
                    onClick={() => toggleCategorySelection(item)}
                  >
                    <span
                      className={`w-[20px] h-[20px] rounded-full border-2 ${
                        selectedCategories.has(item)
                          ? "border-[#00aaff]"
                          : "border-white"
                      } bg-transparent flex items-center justify-center`}
                    >
                      {selectedCategories.has(item) && (
                        <CheckCircle className="text-[#00aaff] w-4 h-4" />
                      )}
                    </span>
                    <h3 className="text-white text-sm">{item}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="w-[78vw] h-[90vh] border-2 border-[#ffffffa9] rounded-md ">
          <div className="w-full h-[10vh] border-b-2 border-[#ffffffa9] flex items-center">
            <h1 className="font-semibold text-white text-lg pl-4">Products</h1>
          </div>

          <div className="grid grid-cols-4 overflow-x-hidden overflow-y-auto gap-5 w-[78vw] h-[78vh] p-2 ">
            {data.map((item, index) => (
              <div
                key={index}
                className="w-[18vw] h-[45vh] border-2 border-[#ffffffa9] rounded-lg bg-[#333] overflow-hidden transition-all duration-300 transform hover:shadow-xl relative"
              >
                <div className="flex items-center justify-center mt-2 gap-2">
                  <img
                    src={item.logo} // Fallback for missing image
                    alt="Logo"
                    className="w-[10vh] h-[10vh] ml-3 object-cover rounded-md transition-all duration-300 transform hover:scale-110"
                  />
                  <div className="flex-1">
                    <h3 className="text-[#ffffffb9] text-xl font-semibold mb-1 hover:text-[#00aaff] transition-colors duration-300 truncate">
                      {item.productName}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-400">
                        {"★".repeat(item.noOfStars)}
                        {"☆".repeat(5 - item.noOfStars)}{" "}
                        {/* For unfilled stars */}
                      </span>
                      <span className="text-[#d1cfcf] text-sm">
                        {item.noOfStars}.0
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-4 flex flex-col h-[50%] justify-between">
                  <div className="flex justify-between items-center mb-1">
                    <span
                      className={`px-3 py-1 text-sm rounded-md ${
                        true
                          ? "bg-green-500 text-white"
                          : "bg-red-500 text-white"
                      }`}
                    >
                      {true ? "Free Trial" : "Paid"}
                    </span>
                  </div>
                  <p className="text-[#d1cfcf] text-sm mb-4 line-clamp-5 mt-2">
                    {item.description}
                  </p>
                </div>
                <div className="absolute bottom-4 right-4">
                  <button
                    className="bg-[#00aaff] text-white px-4 py-1 rounded-md hover:bg-[#0088cc] transition-all duration-300 transform hover:scale-105 flex items-center gap-1"
                    onClick={() => navigate("/product")}
                  >
                    Visit
                    <ExternalLink className="w-[3vh]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
