

// import React, { useState } from 'react';
// import axios from 'axios';
// import fore_cleanup from "../assets/fore_cleanup.png";
// import { SendHorizontal } from 'lucide-react';
// import SearchBar from "../components/SearchBar";
// import BotHeader from '../components/BotHeader';
// import HeadingWithTypingEffect from '../components/HeadingWithTypingEffect';
// import { Plus } from 'lucide-react';

// const Bot = () => {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');
//   const [conversations, setConversations] = useState(['Conversation 1', 'Conversation 2']);
//   const [activeConversation, setActiveConversation] = useState(0);

//   const sendMessage = async () => {
//     if (input.trim() === '') return;

//     const updatedMessages = [...messages, { type: 'user', text: input }];
//     setMessages(updatedMessages);
//     setInput('');

//     try {
//       const response = await axios.post(`${import.meta.env.VITE_API_URL}/generate`, {
//         prompt: input,
//       });
//       const botReply = response.data.text;

//       setMessages((prevMessages) => [
//         ...prevMessages,
//         { type: 'bot', text: botReply },
//       ]);
//     } catch (error) {
//       console.error('Error fetching bot response:', error);
//       setMessages((prevMessages) => [
//         ...prevMessages,
//         { type: 'bot', text: "I am your career guide right now I am under development, wait for few days for further updates" },
//       ]);
//     }
//   };

//   const switchConversation = (index) => {
//     setActiveConversation(index);
//     setMessages([]);
//   };

//   return (

// <div
//   className="w-full min-h-screen bg-cover bg-center bg-no-repeat overflow-x-hidden bg-[#1a1a1a]"
//   // style={{ backgroundImage: `url(${fore_cleanup})` }}
// >
//   <div className="flex w-full">
//     {/* Sidebar */}
//     <div
//       className="w-1/5 h-screen text-white bg-[#1a1a1a] flex flex-col"
//       style={{ fontFamily: 'Futura Now Headline' }}
//     >
//       <div className="p-4 border-b border-gray-700 flex justify-between items-center">
//         <h2 className="text-md font-semibold">Chats</h2>
//         <Plus />
//       </div>
//       <div className="flex-1 overflow-y-auto space-y-1">
//         {conversations.map((conversation, index) => (
//           <div
//             key={index}
//             onClick={() => switchConversation(index)}
//             className={`p-3 ml-2 mr-2 text-md rounded-lg cursor-pointer hover:bg-[#202120] ${
//               index === activeConversation ? 'bg-[#202120]' : ''
//             }`}
//           >
//             {conversation}
//           </div>
//         ))}
//       </div>
//     </div>

//     {/* Main Section */}
//     <div className="w-4/5 flex flex-col items-center ">
//       <BotHeader />

//       <div className="flex flex-col bg-[#222323] rounded-md mt-2 w-[98%] h-[90vh]">
//         {/* Chat Container */}
//         <div className="flex flex-col overflow-y-auto flex-grow p-6 space-y-4">
//           {messages.length === 0 ? (
//             <div className="flex flex-col gap-[35vh] items-center space-y-8">
//               <HeadingWithTypingEffect
//                 text="Heeyy, What are we looking today?"
//                 className="text-3xl text-center text-white"
//               />
             

// <div className="grid grid-cols-2 gap-2 pl-[10vh] pr-[18vh] w-full">
//   {Array(4)
//     .fill()
//     .map((_, i) => (
//       <div
//         key={i}
//         className="bg-[#2c2d2c] rounded-lg p-3 text-white text-sm leading-relaxed w-[30vw] h-[10vh] transition-transform transform hover:scale-105 hover:bg-[#3a3b3a]"
//       >
//         I am a first year student and want to be a full stack developer, what should be my roadmap.
//       </div>
//     ))}
// </div>

//             </div>
//           ) : (
//             messages.map((message, index) => (
//               <div
//                 key={index}
//                 className={`flex items-start space-x-2 rounded-lg px-4 py-2 ${
//                   message.type === 'user'
//                     ? 'ml-auto bg-[#303131]'
//                     : 'mr-auto bg-[#2c2d2c]'
//                 }`}
//               >
//                 {message.type === 'bot' && (
//                   <img
//                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShz95qTVjnz42D9y-F4hQzvklxMoQEWCHu_Q&s"
//                     alt="Bot"
//                     className="w-8 h-8 rounded-full"
//                   />
//                 )}
//                 <span className="text-[#e3e3e2]">{message.text}</span>
//               </div>
//             ))
//           )}
//         </div>

//         {/* Input Section */}
//         <div className="flex items-center h-[10vh] p-4 bg-[#2c2d2c] rounded-b-md space-x-4 w-[61vw] ml-[15vh] rounded-xl mb-2">
//           <textarea
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             placeholder="How may I help you today?"
//             className="flex-grow p-3 bg-[#2c2d2c] text-white rounded-lg border-none focus:outline-none resize-none max-h-[10vh]"
//             rows={1}
//             style={{ lineHeight: '1.5' }}
//             onKeyDown={(e) =>
//               e.key === 'Enter' && !e.shiftKey && sendMessage()
//             }
//           />
//           <button
//             onClick={sendMessage}
//             className="p-2 text-white  hover:bg-[#202120] rounded-lg"
//           >
//             <SendHorizontal />
//           </button>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>


// );
// };

// export default Bot;



import React, { useState } from 'react';
import axios from 'axios';
import fore_cleanup from "../assets/fore_cleanup.png";
import { SendHorizontal } from 'lucide-react';
import SearchBar from "../components/SearchBar";
import BotHeader from '../components/BotHeader';
import HeadingWithTypingEffect from '../components/HeadingWithTypingEffect';
import { Moon } from 'lucide-react';
import { Sun } from 'lucide-react';
import { Plus } from 'lucide-react';

const Bot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [conversations, setConversations] = useState(['Conversation 1', 'Conversation 2']);
  const [activeConversation, setActiveConversation] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(true); // Dark theme by default

  const sendMessage = async () => {
    if (input.trim() === '') return;

    const updatedMessages = [...messages, { type: 'user', text: input }];
    setMessages(updatedMessages);
    setInput('');

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/generate`, {
        prompt: input,
      });
      const botReply = response.data.text;

      setMessages((prevMessages) => [
        ...prevMessages,
        { type: 'bot', text: botReply },
      ]);
    } catch (error) {
      console.error('Error fetching bot response:', error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: 'bot', text: "I am your career guide right now I am under development, wait for few days for further updates" },
      ]);
    }
  };

  const switchConversation = (index) => {
    setActiveConversation(index);
    setMessages([]);
  };

  // Toggle dark/light theme
  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
  };

  return (
    <div
      className={`w-full min-h-screen bg-cover bg-center bg-no-repeat overflow-x-hidden ${isDarkTheme ? 'bg-[#1a1a1a]' : 'bg-[#f0f0f0]'}`}
    >
      <div className="flex w-full">
        {/* Sidebar */}
        <div
          className={`w-1/5 h-screen text-white ${isDarkTheme ? 'bg-[#1a1a1a]' : 'bg-[#ffffff]'} flex flex-col`}
          style={{ fontFamily: 'Futura Now Headline' }}
        >
          <div className="p-4 border-b border-gray-700 flex justify-between items-center">
            <h2 className="text-md font-semibold">Chats</h2>
            <Plus />
          </div>
          <div className="flex-1 overflow-y-auto space-y-1">
            {conversations.map((conversation, index) => (
              <div
                key={index}
                onClick={() => switchConversation(index)}
                className={`p-3 ml-2 mr-2 text-md rounded-lg cursor-pointer hover:bg-[#202120] ${
                  index === activeConversation ? 'bg-[#202120]' : ''
                }`}
              >
                {conversation}
              </div>
            ))}
          </div>

          <div>
          <button
        onClick={toggleTheme}
        className="fixed bottom-4 right-4 p-2 bg-gray-800 text-white rounded-full"
      >
        {isDarkTheme ? <Sun/> : <Moon/>}
      </button>
          </div>
        </div>

        {/* Main Section */}
        <div className="w-4/5 flex flex-col items-center">
          <BotHeader />

          <div className="flex flex-col rounded-md mt-2 w-[98%] h-[90vh]">
            {/* Chat Container */}
            <div className="flex flex-col overflow-y-auto flex-grow p-6 space-y-4">
              {messages.length === 0 ? (
                <div className="flex flex-col gap-[35vh] items-center space-y-8">
                  <HeadingWithTypingEffect
                    text="Heeyy, What are we looking today?"
                    className={`text-3xl text-center ${isDarkTheme ? 'text-white' : 'text-black'}`}
                  />

                  <div className="grid grid-cols-2 gap-2 pl-[10vh] pr-[18vh] w-full">
                    {Array(4)
                      .fill()
                      .map((_, i) => (
                        <div
                          key={i}
                          className={`bg-[#2c2d2c] rounded-lg p-3 text-white text-sm leading-relaxed w-[30vw] h-[10vh] transition-transform transform hover:scale-105 hover:bg-[#3a3b3a]`}
                        >
                          I am a first year student and want to be a full stack developer, what should be my roadmap.
                        </div>
                      ))}
                  </div>
                </div>
              ) : (
                messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex items-start space-x-2 rounded-lg px-4 py-2 ${
                      message.type === 'user'
                        ? 'ml-auto bg-[#303131]'
                        : 'mr-auto bg-[#2c2d2c]'
                    }`}
                  >
                    {message.type === 'bot' && (
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShz95qTVjnz42D9y-F4hQzvklxMoQEWCHu_Q&s"
                        alt="Bot"
                        className="w-8 h-8 rounded-full"
                      />
                    )}
                    <span className={`text-[#e3e3e2]`}>{message.text}</span>
                  </div>
                ))
              )}
            </div>

            {/* Input Section */}
            <div className="flex items-center h-[10vh] p-4 bg-[#2c2d2c] rounded-b-md space-x-4 w-[61vw] ml-[15vh] rounded-xl mb-2">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="How may I help you today?"
                className="flex-grow p-3 bg-[#2c2d2c] text-white rounded-lg border-none focus:outline-none resize-none max-h-[10vh]"
                rows={1}
                style={{ lineHeight: '1.5' }}
                onKeyDown={(e) =>
                  e.key === 'Enter' && !e.shiftKey && sendMessage()
                }
              />
              <button
                onClick={sendMessage}
                className="p-2 text-white hover:bg-[#202120] rounded-lg"
              >
                <SendHorizontal />
              </button>
            </div>
          </div>
        </div>
      </div>

   
     
    </div>
  );
};

export default Bot;
