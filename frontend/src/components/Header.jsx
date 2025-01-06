
import React from 'react';
import { ChevronDown} from 'lucide-react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import { useState } from 'react';
const Header = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const [searchItem,setSearchItem]=useState('');
  
    const handleKeyDown=(event)=>{
      if(event.key==='Enter' && searchItem.trim()!==''){
        navigate(`/search/${searchItem}`)
      }
    }

  return (
    <div className="w-full h-[8vh] bg-[#F2F3F5] flex items-center justify-between px-6 md:px-10 lg:px-16 py-4">
      <div className="flex items-center gap-8 md:gap-12">
        <div className="font-semibold text-xl">Logo</div>
        <div className="flex gap-4 text-sm">
          {[
            { label: "Chat", path: "/bot" },
            { label: "Psychometric Test", path: "/pschometric-test" },
            { label: "Marketplace", path: "/explore" },
          ].map((item) => (
            <button
              key={item.label}
              className="font-semibold hover:text-[#2D9A54] transition relative group"
              onClick={() => navigate(item.path)}
            >
              {item.label}
              <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-[#2D9A54] transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </div>
      </div>

         
      <div className='w-[40vw] text-black pt-1 pb-1'>
      
 <input
 type='text'
 placeholder='Search careers here'
 value={searchItem}
 onChange={(e)=>setSearchItem(e.target.value)}  
 onKeyDown={handleKeyDown}

 className='w-full max-w-md p-2 border-2 rounded-lg focus:outline-none   border-[#bebebe] '>
  
 

 </input>
</div>

      <div className="flex gap-6 items-center">
    

        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
          <img
            src="https://i.pravatar.cc/300"
            alt="User Avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
