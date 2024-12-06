// import React from "react";
// import fore_cleanup from "../assets/fore_cleanup.png";
// import SearchBar from "../components/SearchBar";
// import { Bookmark } from "lucide-react";
// import { ChevronDown } from "lucide-react";
// import { Link } from "lucide-react";
// import { Twitter } from "lucide-react";

// const Product = () => {

//   const data = {
//     logo: "https://ph-files.imgix.net/3e311423-7d71-4542-9728-cb8839440917.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=64&h=64&fit=crop&dpr=1",
//     title: "Rapport Self Service",
//     tagline: "Build your own virtual interactive personalities",
//     noOfStars: 5,
//     noOfReviews: 3,
//     noOfFollowers: 358,
//     description:
//       "Rapport Self-Service makes it easy to combine all of the building blocks necessary to create, animate, and deploy your own Virtual Interactive Personality (VIP).",
//     link: "www.swapped.finance",
//     tags: ["AI", "AI Chatbots", "AI Characters"],
//     images: [
//       "https://ph-files.imgix.net/ac2c8314-359a-4c0f-8e2a-9c01d2e63510.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop&dpr=1",
//       "https://ph-files.imgix.net/577d7ed6-20f2-471a-a667-2edee184e0e0.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop&dpr=1",
//       "https://ph-files.imgix.net/cc39fcc6-6ccf-4273-9ca2-fa7f3a21f261.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop&dpr=1",
//     ],
//     alternativeProducts: [
//       {
//         logo: "https://ph-avatars.imgix.net/4970126/40205527-dfb5-4638-b531-be08aca80474.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=32&h=32&fit=crop&dpr=1",
//         info: "Inworld Ai",
//         description: "Brains for virtual characters, powered by AI",
//       },
//     ],
//   };



//   const handleClick = () => {
//     console.log("button clicked");
//     window.open(data.link, "_blank", "noopener,noreferrer");
//   };

//   return (
//     <div
//       className="w-[99.3vw]  bg-cover bg-center  overflow-x-hidden flex justify-center "
//       style={{ backgroundImage: `url(${fore_cleanup})` }}
//     >
//       <div className="">
//         <SearchBar />

//         <div className="w-[80vw]  border-t-2 border-gray-50 mt-6 ">
//           <div className="w-full h-full">
//             <div className="w-full h-[20vh] flex items-center justify-between">
//               <div>
//                 <div className="flex gap-2">
//                   <div>
//                     <img
//                       src="https://ph-files.imgix.net/3e311423-7d71-4542-9728-cb8839440917.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=64&h=64&fit=crop&dpr=1"
//                       alt=""
//                     />
//                   </div>

//                   <div>
//                     <h3 className="text-2xl font-bold text-white">
//                       {data.title}
//                     </h3>
//                     <p className="text-gray-50">{data.tagline}</p>

//                     <div className="flex items-center gap-2 text-yellow-500">
//                       {Array.from({ length: data.noOfStars }, (_, index) => (
//                         <span key={index}>⭐</span>
//                       ))}
//                     </div>

//                     <div className="flex gap-3 text-[#d8e5e5c9]">
//                       <p>{data.noOfReviews} reviews</p>
//                       <p>{data.noOfFollowers} followers</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="flex gap-8 items-center justify-center">
//                 <button className="w-[8vw] h-[7vh] text-gray-50 flex gap-2 pt-2">
//                   <Bookmark />
//                   Save
//                 </button>
//                 <button className="text-black bg-[#ffffff] border-2 border-gray-50 w-[8vw] h-[7vh] rounded-md text-sm font-semibold">
//                   Follow
//                 </button>
//                 <button
//                   onClick={handleClick}
//                   className="bg-[#ff6055] w-[8vw] h-[7vh] rounded-md text-white text-sm font-semibold"
//                 >
//                   Visit Website
//                 </button>
//               </div>
//             </div>

//             <div className="mt-2 pb-1 border-b  rounded-gray-200">
//               <ul className="flex gap-10 text-white">
//                 <li>Overview</li>
//                 <li>Launches</li>
//                 <li>Reviews</li>
//                 <li>Team</li>
//                 <li>Awards</li>
//                 <li className="flex  gap-1">
//                   More
//                   <ChevronDown />
//                 </li>
//               </ul>
//             </div>

//             <div className="w-full flex mt-10">
//               <div className="w-[70%]  h-[100vh] flex flex-col gap-4 ">
//                 <h1 className="text-white font-semibold">
//                   What is {data.title}?
//                 </h1>
//                 <p className="text-gray-50">{data.description}</p>

//                 <div className="flex gap-2 text-gray-50 text-sm">
//                   {data.tags.map((tag, index) => (
//                     <span
//                       key={index}
//                       className="border-2 border-gray-50 rounded-lg w-auto h-[4vh] p-1 flex items-center justify-center"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>

//                 <div className="flex gap-2 overflow">
//                   {data.images.map((image, index) => {
//                     return (
//                       <img
//                         key={index}
//                         className="rounded-md"
//                         src={image}
//                         alt=""
//                       />
//                     );
//                   })}
//                 </div>

//                 <div className="w-[100%] h-auto text-gray-50">
//                   <h1 className="text-2xl font-semibold text-gray-50 ">
//                     Recent Launches
//                   </h1>

//                   <div className="w-[100%] h-[30vh] flex justify-between  p-2 ">
//                     <div className="w-[75%]">
//                       <h1 className="font-semibold mb-5">{data.title}</h1>
//                       <p className="leading-tight">
//                         2023 - Rapport Self-Service is a Virtual Interactive
//                         Personality (VIP) creation platform that combines AI, AI
//                         Chatbots, and other building blocks to create, animate,
//                         and deploy your own unique virtual character. It is
//                         designed to help businesses and individuals create
//                         engaging and personalized experiences for their
//                         customers.
//                       </p>
//                     </div>

//                     <div className="w-[20%] h-[100%] flex items-center justify-center">
//                       <img
//                         src={data.images[0]} 
//                         alt="Product Image" 
//                         className="w-[150px] h-[90px] object-cover" 
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <button className="bg-[#ff6154] text-white w-[10vw] h-[7vh] rounded-md">
//                   Leave a review
//                 </button>
//               </div>

//               <div className="flex flex-col gap-4 w-[25%]">
//                 <div className="w-[100%] border h-[60vh] border-gray-50 ml-5 flex flex-col gap-5 rounded-md p-6">
//                   <div className="flex flex-col gap-1">
//                     <h3 className="font-semibold text-white">Product status</h3>
//                     <h3 className="text-gray-50 text-sm">Claimed</h3>
//                   </div>

//                   <div className="flex flex-col gap-1">
//                     <h3 className="font-semibold text-white ">Links</h3>
//                     <h3 className="text-gray-50 text-sm flex gap-2 cursor-pointer">
//                       <Link className="w-[3vh]" />
//                       {data.link}
//                     </h3>
//                   </div>

//                   <div className="flex flex-col gap-1">
//                     <h3 className="font-semibold text-white">Social</h3>
//                     <Twitter className="text-white" />
//                   </div>

//                   <div className="flex flex-col gap-1">
//                     <h3 className="font-semibold text-white">Makers</h3>
//                     <img
//                       className="w-[5vh] rounded-full"
//                       src="https://ph-avatars.imgix.net/4970126/40205527-dfb5-4638-b531-be08aca80474.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=32&h=32&fit=crop&dpr=1"
//                       alt="a"
//                     />
//                   </div>

//                   <h1 className="text-gray-50 underline cursor-pointer">
//                     All Makers
//                   </h1>
//                 </div>

//                 <div className="w-[100%] border border-gray-50 ml-5 flex flex-col gap-5 rounded-md p-6">
//                   <div className="flex flex-col gap-4">
//                     <h3 className="font-bold text-white text-lg">
//                       Alternative Products
//                     </h3>
//                     {data.alternativeProducts.map((product, index) => (
//                       <div key={index} className="flex gap-2">
//                         <div>
//                           <img
//                             className="w-[9vh] h-[7vh] rounded-full"
//                             src={product.logo}
//                             alt={product.info}
//                           />
//                         </div>
//                         <div className="text-gray-50">
//                           <h5 className="font-semibold">{product.info}</h5>
//                           <p className="text-sm">{product.description}</p>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="w-[100%]  h-[30vh] ml-5 flex flex-col gap-5 rounded-md p-6">
//                   <div className="flex flex-col gap-4 w-[100%]">
//                     <div className="flex flex-col gap-2 text-xs w-[100%] text-gray-50">
//                       <div className="flex gap-2">
//                         <span>Blog</span>
//                         <span>Newsletter</span>
//                         <span>Questions</span>
//                       </div>

//                       <div className="flex gap-2">
//                         <span>Apps</span>
//                         <span>About</span>
//                         <span>FAQ</span>
//                         <span>Terms</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Product;








import React from "react";
import fore_cleanup from "../assets/fore_cleanup.png";
import SearchBar from "../components/SearchBar";
import { Bookmark, ChevronDown, Link, Twitter } from "lucide-react";

const Product = () => {
  const data = {
    logo: "https://ph-files.imgix.net/3e311423-7d71-4542-9728-cb8839440917.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=64&h=64&fit=crop&dpr=1",
    title: "Rapport Self Service",
    tagline: "Build your own virtual interactive personalities",
    noOfStars: 5,
    noOfReviews: 3,
    noOfFollowers: 358,
    description:
      "Rapport Self-Service makes it easy to combine all of the building blocks necessary to create, animate, and deploy your own Virtual Interactive Personality (VIP).",
    link: "www.swapped.finance",
    tags: ["AI", "AI Chatbots", "AI Characters"],
    images: [
      "https://ph-files.imgix.net/ac2c8314-359a-4c0f-8e2a-9c01d2e63510.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop&dpr=1",
      "https://ph-files.imgix.net/577d7ed6-20f2-471a-a667-2edee184e0e0.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop&dpr=1",
      "https://ph-files.imgix.net/cc39fcc6-6ccf-4273-9ca2-fa7f3a21f261.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=256&h=160&fit=crop&dpr=1",
    ],
    alternativeProducts: [
      {
        logo: "https://ph-avatars.imgix.net/4970126/40205527-dfb5-4638-b531-be08aca80474.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=32&h=32&fit=crop&dpr=1",
        info: "Inworld Ai",
        description: "Brains for virtual characters, powered by AI",
      },
    ],
  };

  const handleClick = () => {
    console.log("button clicked");
    window.open(data.link, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className="w-full bg-cover bg-center overflow-x-hidden flex justify-center min-h-screen"
      style={{ backgroundImage: `url(${fore_cleanup})` }}
    >
      <div className="w-full max-w-7xl px-4">
        <SearchBar />

        <div className="mt-6 border-t-2 border-gray-50">
          <div className="w-full">
            <div className="w-full flex flex-wrap sm:flex-nowrap justify-between items-center gap-6 sm:gap-8">
              <div className="flex items-center gap-4">
                <img
                  className="w-16 h-16"
                  src={data.logo}
                  alt="Product Logo"
                />
                <div>
                  <h3 className="text-2xl font-bold text-white mt-3 md:mt-0 lg:mt-0 xl:mt-0">{data.title}</h3>
                  <p className="text-gray-50">{data.tagline}</p>
                  <div className="flex items-center gap-2 text-yellow-500">
                    {Array.from({ length: data.noOfStars }, (_, index) => (
                      <span key={index}>⭐</span>
                    ))}
                  </div>
                  <div className="flex gap-3 text-[#d8e5e5c9] text-sm">
                    <p>{data.noOfReviews} reviews</p>
                    <p>{data.noOfFollowers} followers</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 items-center justify-center">
                <button className="flex items-center gap-2 p-1 w-[25vw] h-[5vh] md:w-[10vw] md:h-[4vh] lg:w-[10vw] lg:h-[7vh] xl:w-[6vw] xl:h-[7vh]  text-gray-50 s">
                  <Bookmark />
                  Save
                </button>
                <button className="text-black bg-[#ffffff] border-2 border-gray-50 p-1 w-[27vw] h-[5vh] md:w-[12vw] md:h-[4vh] lg:w-[12vw] lg:h-[5vh] xl:w-[8vw] xl:h-[7vh]  rounded-md text-sm font-semibold">
                  Follow
                </button>
                <button
                  onClick={handleClick}
                  className="bg-[#ff6055] p-1 w-[27vw] h-[5vh] md:w-[12vw] md:h-[4vh] lg:w-[12vw] lg:h-[5vh] xl:w-[8vw] xl:h-[7vh] rounded-md text-white text-sm font-semibold"
                >
                  Visit Website
                </button>
              </div>
            </div>

            <div className="mt-4 pb-2 border-b text-white">
              <ul className="flex gap-10">
                <li>Overview</li>
                <li>Launches</li>
                <li>Reviews</li>
                <li>Team</li>
                <li className="hidden md:block lg:block xl:block">Awards</li>
                <li className="gap-1 items-center cursor-pointer hidden md:flex lg:flex xl:flex">
                  More <ChevronDown />
                </li>
              </ul>
            </div>

            <div className="mt-10 flex flex-col lg:flex-row xl:flex-row md:flex-row gap-6">
              <div className="w-full sm:w-7/12 flex flex-col gap-4">
                <h1 className="text-white font-semibold text-lg sm:text-2xl">
                  What is {data.title}?
                </h1>
                <p className="text-gray-50 text-sm sm:text-base">{data.description}</p>

                <div className="flex gap-2 text-gray-50 text-sm flex-wrap">
                  {data.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="border-2 border-gray-50 rounded-lg p-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 overflow-x-auto">
                  {data.images.map((image, index) => (
                    <img key={index} className="rounded-md w-full sm:w-64 h-auto" src={image} alt="" />
                  ))}
                </div>

                <div className="">
                  <h1 className="text-2xl font-semibold text-gray-50">Recent Launches</h1>
                  <div className="flex justify-between items-center mt-4 p-2">
                    <div className="w-[100vw] flex flex-col ">
                      
                      <p className="w-[100%] leading-tight text-sm sm:text-base text-gray-50">
                        2023 - Rapport Self-Service is a platform that combines AI, AI Chatbots, and other building blocks to create, animate, and deploy your own unique virtual character.
                      </p>
                    </div>
                    <img
                      src={data.images[0]}
                      alt="Product Image"
                      className="w-[150px] h-[90px] object-cover rounded-md"
                    />
                  </div>
                </div>

                <button className="bg-[#ff6154] text-white p-1  md:h-[5vh]  lg:h-[7vh]  xl:h-[7vh] xl:w-[10vw] rounded-md">
                  Leave a review
                </button>
              </div>

              <div className="w-full  sm:w-5/12 flex flex-col gap-6">
                <div className="border border-gray-50 rounded-md p-6 ">
                  <div className="flex flex-col gap-2">
                    <h3 className="font-semibold text-white">Product status</h3>
                    <p className="text-gray-50 text-sm">Claimed</p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="font-semibold text-white">Links</h3>
                    <p className="text-gray-50 text-sm flex gap-2">
                      <Link className="w-[3vh]" />
                      {data.link}
                    </p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="font-semibold text-white">Social</h3>
                    <Twitter className="text-white" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="font-semibold text-white">Makers</h3>
                    <img
                      className="w-9 h-9 rounded-full"
                      src={data.alternativeProducts[0].logo}
                      alt="Maker Logo"
                    />
                    <p className="text-gray-50 text-sm">{data.alternativeProducts[0].info}</p>
                    <p className="text-gray-50 text-sm">{data.alternativeProducts[0].description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
