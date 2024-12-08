import React, { useState } from 'react';
import axios from 'axios';
import fore_cleanup from "../assets/fore_cleanup.png";
import { SendHorizontal } from 'lucide-react';
import SearchBar from "../components/SearchBar";

const Bot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [conversations, setConversations] = useState(['Conversation 1', 'Conversation 2']);
  const [activeConversation, setActiveConversation] = useState(0);

  const sendMessage = async () => {
    if (input.trim() === '') return;

    // Add user's message to state
    const updatedMessages = [...messages, { type: 'user', text: input }];
    setMessages(updatedMessages);
    setInput('');

    // Call the backend to get bot's response
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
    setMessages([]); // Reset messages for simplicity; replace with real data.
  };

  return (
    <div
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat overflow-x-hidden"
      style={{ backgroundImage: `url(${fore_cleanup})` }}
    >


<div className='flex w-full'>
<div className="w-1/5 h-[100vh] text-white  bg-[#171616] flex flex-col">
        <div className="p-4 border-b border-gray-700">
          <h2 className="text-md font-semibold">Chats</h2>
        </div>
        <div className="flex-1 overflow-y-auto">
          {conversations.map((conversation, index) => (
            <div
              key={index}
              onClick={() => switchConversation(index)}
              className={`p-3 ml-2 mr-2 pt-2 mt-1 h-[6vh] text-md rounded-lg cursor-pointer hover:bg-[#202120] ${
                index === activeConversation ? 'bg-[#202120]' : ''
              }`}
            >
              {conversation}
            </div>
          ))}
        </div>
        
      </div>


   <div className='w-[80%]'>
   

<div className="flex flex-col flex-1 items-center pt-1">
  <div className="flex flex-col overflow-y-auto h-[84vh]  p-4 space-y-4 w-[50vw] overflow-x-hidden">
    {messages.map((message, index) => (
      <div
        key={index}
        className={`text-[#e3e3e2] inline-block px-4 py-2 verflow-wrap: anywhere; rounded-lg ${
          message.type === 'user'
            ? 'ml-auto bg-[#303131]'
            : 'mr-auto  flex items-start space-x-2'
        }`}
      >
        {message.type === 'bot' && (
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShz95qTVjnz42D9y-F4hQzvklxMoQEWCHu_Q&s'
            alt="Bot"
            className="w-8 h-8 rounded-full" // Adjust size and round the image
          />
        )}
        <span>{message.text}</span>
      </div>
    ))}
  </div>



<div className="flex flex-wrap items-center p-4 bg-gray-800 w-[50vw] rounded-2xl">
<textarea
value={input}
onChange={(e) => setInput(e.target.value)}
placeholder="Type your message..."
className="flex-1 p-2 bg-gray-800 text-white rounded-lg border-none focus:outline-none resize-none break-words h-auto max-h-[50vh] overflow-y-auto"
onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && sendMessage()}
rows={1}
style={{ lineHeight: '1.5' }}
/>
<button
onClick={sendMessage}
className="ml-2 px-4 py-2 text-white rounded-lg  hover:bg-gray-700"
>
<SendHorizontal />
</button>
</div>



  

  <h1 className='fixed text-sm bottom-0 ml-[1vh]  text-[#b4b493]'>Under development phase</h1>
</div>
   </div>
</div>
    </div>
  );
};

export default Bot;
