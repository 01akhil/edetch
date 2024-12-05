import React from 'react'
import { useState } from 'react';
import { SlidersHorizontal,Search } from 'lucide-react';
const SearchBar = () => {

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Searching for:', searchQuery, 'Category:', category, 'Difficulty:', difficulty);
      };
    
      const toggleFilterMenu = () => {
        setIsFilterVisible((prev) => !prev); 
      };


      const [isFilterVisible, setIsFilterVisible] = useState(false); 
      const [searchQuery, setSearchQuery] = useState(''); 

      
      const [category, setCategory] = useState(''); 
      const [difficulty, setDifficulty] = useState('');

  return (
    <div className="w-full h-[10vh] flex items-center justify-center text-[#fbfbfae7] space-y-6">
        <form onSubmit={handleSearch} className="w-[80%] md:w-[40%] relative mt-2">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for careers, tests, or resources..."
            className="w-full py-2 pl-4 pr-10 border-b-2 border-white bg-transparent text-white placeholder-[#fbfbfae7] focus:outline-none focus:border-[#00aaff] transition-all duration-300"
          />
          <button type="submit" className="absolute right-0 top-0 py-2 px-4 text-[#00aaff] hover:text-[#00aaff]">
            <Search />
          </button>
        </form>

        <div className="relative">
          <SlidersHorizontal 
            className="text-white ml-4 cursor-pointer transition-all duration-300 hover:text-[#00aaff]"
            onClick={toggleFilterMenu}
          />
          
          {isFilterVisible && (
            <div className="absolute top-12 right-0 bg-[#636262] text-white p-4 rounded-lg shadow-lg w-48 transform transition-all duration-300 ease-in-out z-10">
              <div className="mb-4">
                <label className="block mb-2">Category</label>
                <select 
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="bg-transparent text-white border-b-2 border-white focus:outline-none focus:border-[#00aaff] transition-all duration-300"
                >
                  <option value="">Select Category</option>
                  <option value="career">Career</option>
                  <option value="tests">Tests</option>
                  <option value="resources">Resources</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block mb-2">Difficulty</label>
                <select 
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value)}
                  className="bg-transparent text-white border-b-2 border-white focus:outline-none focus:border-[#00aaff] transition-all duration-300"
                >
                  <option value="">Select Difficulty</option>
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </div>
            </div>
          )}
        </div>
      </div>
  )
}

export default SearchBar
