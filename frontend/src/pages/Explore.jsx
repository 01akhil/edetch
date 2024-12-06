import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import fore_cleanup from "../assets/fore_cleanup.png";
import { ExternalLink } from "lucide-react";

import { CheckCircle } from "lucide-react";
import SearchBar from "../components/SearchBar";

const Explore = () => {
  const data = [
    {
      logo: "",
      productName: "Product Name",
      noOfStars: 5,
      description:
        "This is a brief description of the product.sdgbsjhgbf sjdgbgjdfsgb jfgfbgkdfgbkdjf gjkfdbgnkjlgnkfnbkljdsahfndsflhnasdkljgbnfdkjgbndfklgjkfhdgjkhdafnjgkhnadfkjhfdngjksdkfsdhfk",
    },
    {
      logo: "",
      productName: "Product Name",
      noOfStars: 5,
      description:
        "This is a brief description of the product.sdgbsjhgbf sjdgbgjdfsgb jfgfbgkdfgbkdjf gjkfdbgnkjlgnkfnbkljdsahfndsflhnasdkljgbnfdkjgbndfklgjkfhdgjkhdafnjgkhnadfkjhfdngjksdkfsdhfk",
    },

    {
      logo: "",
      productName: "Product Name",
      noOfStars: 5,
      description:
        "This is a brief description of the product.sdgbsjhgbf sjdgbgjdfsgb jfgfbgkdfgbkdjf gjkfdbgnkjlgnkfnbkljdsahfndsflhnasdkljgbnfdkjgbndfklgjkfhdgjkhdafnjgkhnadfkjhfdngjksdkfsdhfk",
    },

    {
      logo: "",
      productName: "Product Name",
      noOfStars: 5,
      description:
        "This is a brief description of the product.sdgbsjhgbf sjdgbgjdfsgb jfgfbgkdfgbkdjf gjkfdbgnkjlgnkfnbkljdsahfndsflhnasdkljgbnfdkjgbndfklgjkfhdgjkhdafnjgkhnadfkjhfhbjkhbjhkgbbbbbbdngjksdkfsdhfk",
    },

    {
      logo: "",
      productName: "Product Name",
      noOfStars: 5,
      description:
        "This is a brief description of the product.sdgbsjhgbf sjdgbgjdfsgb jfgfbgkdfgbkdjf gjkfdbgnkjlgnkfnbkljdsahfndsflhnasdkljgbnfdkjgbndfklgjkfhdgjkhdafnjgkhnadfkjhfdngjksdkfsdhfk",
    },

    {
      logo: "",
      productName: "Product Name",
      noOfStars: 5,
      description:
        "This is a brief description of the product.sdgbsjhgbf sjdgbgjdfsgb jfgfbgkdfgbkdjf gjkfdbgnkjlgnkfnbkljdsahfndsflhnasdkljgbnfdkjgbndfklgjkfhdgjkhdafnjgkhnadfkjhfdngjksdkfsdhfk",
    },

    {
      logo: "",
      productName: "Product Name",
      noOfStars: 5,
      description:
        "This is a brief description of the product.sdgbsjhgbf sjdgbgjdfsgb jfgfbgkdfgbkdjf gjkfdbgnkjlgnkfnbkljdsahfndsflhnasdkljgbnfdkjgbndfklgjkfhdgjkhdafnjgkhnadfkjhfdngjksdkfsdhfk",
    },

    {
      logo: "",
      productName: "Product Name",
      noOfStars: 5,
      description:
        "This is a brief description of the product.sdgbsjhgbf sjdgbgjdfsgb jfgfbgkdfgbkdjf gjkfdbgnkjlgnkfnbkljdsahfndsflhnasdkljgbnfdkjgbndfklgjkfhdgjkhdafnjgkhnadfkjhfdngjksdkfsdhfk",
    },

    {
      logo: "",
      productName: "Product Name",
      noOfStars: 5,
      description:
        "This is a brief description of the product.sdgbsjhgbf sjdgbgjdfsgb jfgfbgkdfgbkdjf gjkfdbgnkjlgnkfnbkljdsahfndsflhnasdkljgbnfdkjgbndfklgjkfhdgjkhdafnjgkhnadfkjhfdngjksdkfsdhfk",
    },

    {
      logo: "",
      productName: "Product Name",
      noOfStars: 5,
      description:
        "This is a brief description of the product.sdgbsjhgbf sjdgbgjdfsgb jfgfbgkdfgbkdjf gjkfdbgnkjlgnkfnbkljdsahfndsflhnasdkljgbnfdkjgbndfklgjkfhdgjkhdafnjgkhnadfkjhfdngjksdkfsdhfk",
    },
    {
      logo: "",
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
        <div className="w-[18vw] h-[90vh] border-2 border-[#ffffffa9] rounded-md hidden lg:flex flex-col ">
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

        <div className="w-[98vw] md:w-[78vw] h-[90vh] border-2 border-[#ffffffa9] rounded-md ">
          <div className="w-full h-[10vh] border-b-2 border-[#ffffffa9] flex items-center">
            <h1 className="font-semibold text-white text-lg pl-4">Products</h1>
          </div>

          <div className="grid gap-2 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4   overflow-x-hidden overflow-y-auto md:gap-2 md:w-[78vw] h-[78vh] p-2 pr-0">
            {data.map((item, index) => (
              <div
                key={index}
                className="w-[45vw] h-[35vh] lg:h-[25vh] lg:w-[25vw] border-2 border-[#ffffffa9] rounded-lg bg-[#333] overflow-hidden transition-all duration-300 transform hover:shadow-xl relative md:w-[37vw] md:h-[40vh]  xl:w-[18vw] xl:h-[42vh]"
              >
                <div className="flex items-center justify-center mt-2 gap-2">
                  <img
                    src={item.logo} // Fallback for missing image
                    alt="Logo"
                    className="w-[10vh] h-[10vh] ml-3 object-cover rounded-md transition-all duration-300 transform hover:scale-110"
                  />
                  <div className="flex-1">
                    <h3 className="text-[#ffffffb9] text-wrap text-xl font-semibold mb-1 hover:text-[#00aaff] transition-colors duration-300 truncate">
                      {item.productName}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-400">
                        {"★".repeat(item.noOfStars)}
                        {"☆".repeat(5 - item.noOfStars)}{" "}
                        {/* For unfilled stars */}
                      </span>
                      
                    </div>
                  </div>
                </div>
                <div className="p-4 flex flex-col h-[50%] justify-between">
                  <div className="flex justify-between items-center  mb-1 ">
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
                  <p className="text-[#d1cfcf] text-sm mb-4 line-clamp-5 mt-2 ">
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









