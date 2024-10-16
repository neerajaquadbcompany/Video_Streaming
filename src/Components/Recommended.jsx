import React, { useEffect, useRef } from 'react';
import { movies } from '../Util/Video_data';
import { useNavigate } from 'react-router-dom';
const Recommended = () => {
  const scrollRef = useRef(null); // Reference for the scrollable container
  const scrollInterval = 1000; // Interval for auto-scrolling (1 second)

  // Auto-scroll functionality
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({
          left: 250, // Amount to scroll to the right
          behavior: 'smooth', // Smooth scrolling effect
        });
      }
    }, scrollInterval);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);


  const navigate = useNavigate();
  
  const handleWatchNow = (movie) => {
    console.log("Clicked",movie)
    navigate('/video_details', { state: { movie } });
  };
  

  return (
    <>
      <div className='flex flex-col'>
        

        
        <div className="mt-4 mb-5 flex relative scrollbar-hidden overflow-hidden ml-5">
          <div ref={scrollRef} className="flex gap-5 overflow-x-scroll overflow-hidden w-full scrollbar-hidden">
            {movies.map((movie, index) => (
              <div key={index} className="flex flex-col flex-none relative group overflow-hidden mb-5 rounded-lg shadow-lg cursor-pointer">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-[250px] h-[300px] object-cover transition-transform duration-300 transform group-hover:scale-110 group-hover:translate-x-4"
                />
                <div
                className="absolute bottom-0 left-0 right-0 h-1/2 flex flex-col items-center justify-end p-4 bg-gradient-to-t from-[#001229] via-[#001f3f] to-transparent opacity-0 transform translate-y-full transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"                >
                  <h3 className="text-white text-md text-center font-semibold transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                    {movie.title}
                  </h3>
                  <button
                    onClick={() => handleWatchNow(movie)}
                    className="mt-2 inline-block px-3 text-sm hover:text-black hover:bg-white py-1 bg-red-600 text-white rounded transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0"
                  >
                    Watch Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Recommended;
