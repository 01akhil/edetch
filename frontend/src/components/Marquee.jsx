
import React from 'react';

const Marquee = () => {
  return (
    <div className="w-[80vw] ml-[8vw] h-[55vh] shadow-lg overflow-hidden rounded-md mb-2 text-[#dee5e5]">
      <h1 className="text-xl font-semibold ml-[60vh] mb-[20vh]">
        Trusted By Top Institutions And Companies
      </h1>

      <div className="flex animate-marquee items-center whitespace-nowrap">
        {/* Apple */}
        <div className="mx-5 flex items-center text-lg font-semibold">
          <img
            src="https://imgs.search.brave.com/1bhL6ufZamxoV5Ikhs9IXvQoGD4DPumk9Nh2polNLQ8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzEw/L0FwcGxlX2xvZ29f/Z3JleS02MjR4NDAw/LnBuZw"
            alt="Apple Logo"
            className="h-8 w-12 mr-2"
          />
          Apple Inc.
        </div>

        {/* Harvard */}
        <div className="mx-5 flex items-center text-lg font-semibold">
          <img
            src="https://imgs.search.brave.com/gobRnLZ25CnY59Cm1yGwvK3fYRlljWOIN9ps8t_dX6c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTUvSGFy/dmFyZC1Mb2dvLVBO/Ry1QaWMucG5n"
            alt="Harvard Logo"
            className="h-8 w-12 mr-2"
          />
          Harvard University
        </div>

        {/* Cambridge */}
        <div className="mx-5 flex items-center text-lg font-semibold">
          <img
            src="https://imgs.search.brave.com/00XhYKkCUjas2e1FpkV9ncp7HsoxMRStz33sCGjIO9s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy1kb3dubG9hZC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTYvMDkvVW5pdmVy/c2l0eV9vZl9DYW1i/cmlkZ2VfY3Jlc3Rf/bG9nby01NTZ4NzAw/LnBuZw"
            alt="Cambridge Logo"
            className="h-8 w-12 mr-2"
          />
          University of Cambridge
        </div>

        {/* McKinsey */}
        <div className="mx-5 flex items-center text-lg font-semibold">
          <img
            src="https://imgs.search.brave.com/qxwGI3WPnCzFsEUxf_I4GEPxsWdWNyDl57JTn3FgGvM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bGlibG9nby5jb20v/aW1nLWxvZ28vbWM0/MDQybWMwMi1tY2tp/bnNleS1hbmQtY29t/cGFueS1sb2dvLW1j/a2luc2V5LWFtcC1j/b21wYW55LXRoZS1k/aXZlcnNpdHktY291/bmNpbC5wbmc"
            alt="McKinsey Logo"
            className="h-8 w-8 mr-2"
          />
          McKinsey & Company
        </div>

        {/* IIT Bombay */}
        <div className="mx-5 flex items-center text-lg font-semibold">
          <img
            src="https://imgs.search.brave.com/5zXBDaKBRYssyLz8dVuUNqHwXrXujUKhP-eHsU_spfM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5na2V5LmNvbS9w/bmcvZGV0YWlsLzUw/LTUwNjAzOV9paXQt/Ym9tYmF5LWxvZ28t/cG5nLnBuZw"
            alt="IIT Bombay Logo"
            className="h-8 w-8 mr-2"
          />
          IIT Bombay
        </div>




        


      </div>
    </div>
  );
};

export default Marquee;
