
import React from 'react';
import { Sun } from 'lucide-react';
import { SlidersVertical } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

const Header = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  return (
    <div className="w-full h-[8vh] bg-[#F2F3F5] flex items-center justify-between px-6 md:px-10 lg:px-16 py-4">
      <div className="flex items-center gap-8 md:gap-12">
        <div className="font-semibold text-xl">Logo</div>
        <div className="flex gap-4 text-sm">
          <button
            className="font-semibold hover:text-[#2D9A54] transition"
            onClick={() => navigate('/bot')} // Navigate to /chat when clicked
          >
            Chat
          </button>
          <button
            className="font-semibold hover:text-[#2D9A54] transition"
            onClick={() => navigate('/pschometric-test')} // Navigate to /psychometric-test when clicked
          >
            Psychometric Test
          </button>
          <button
            className="font-semibold hover:text-[#2D9A54] transition"
            onClick={() => navigate('/explore')} // Navigate to /marketplace when clicked
          >
            Marketplace
          </button>
        </div>
      </div>

      <div className="flex gap-6 items-center">
        <h1 className="flex items-center justify-center gap-2 border border-gray-500 rounded-md px-4 py-2 h-[5vh] text-sm">
          English <ChevronDown className="w-4 h-4" />
        </h1>
      
        <div className='w-10 h-10 rounded-full overflow-hidden border-2 border-white'>
          <img src="https://i.pravatar.cc/300" alt="User Avatar" className='w-full h-full object-cover' />
        </div>
      </div>
    </div>
  );
};

export default Header;
