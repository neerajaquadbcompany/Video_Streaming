import React,{useRef} from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { movies } from '../Util/Video_data';
import { useNavigate } from 'react-router-dom';
const Upcoming_Videos = () => {
    const scrollRef = useRef(null); 

    const scrollLeft = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({
          left: -250, 
          behavior: 'smooth', 
        });
      }
    };
  
    const scrollRight = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({
          left: 250, 
          behavior: 'smooth',
        });
      }
    };


    const navigate = useNavigate();
  
    const handleWatchNow = (movie) => {
      console.log("Clicked",movie)
      navigate('/video_details', { state: { movie } });
    };
  
  
    
  
    return (
      <>
      <div className='flex flex-col '>
      <div className='flex justify-between mt-4 items-center '>
          <div className='text-white text-2xl font-semibold'>Upcoming Videos</div>
          <div className="  flex gap-2 z-10 justify-end  ">
  
            <button
              onClick={scrollLeft}
              className="bg-gray-800 hover:bg-red-600 text-white rounded-md p-2"
              title="Scroll Left"
            >
              <FaChevronLeft size={12} /> 
            </button>
            <button
              onClick={scrollRight}
              className="bg-gray-800 hover:bg-red-600 text-white rounded-md p-2"
              title="Scroll Right"
            >
              <FaChevronRight size={12} /> 
            </button>
          </div>
      </div>
      
        <div className='border border-gray-700 mt-4'></div> 
        <div className="mt-4 mb-5 flex justify-center relative scrollbar-hidden overflow-hidden ml-5">
                    <div
                        ref={scrollRef}
                        className="flex gap-5 overflow-x-scroll w-full scrollbar-hidden"
                        style={{ maxWidth: 'calc(4 * 250px + 5 * 1rem)' }} // Adjusted for 4 cards
                    >
                        {movies.map((movie, index) => (
                            <div
                                key={index}
                                className="flex flex-col flex-none relative group overflow-hidden mb-5 rounded-lg shadow-lg cursor-pointer"
                                style={{ width: '250px' }} // Width of each card
                            >
                                <img
                                    src={movie.image}
                                    alt={movie.title}
                                    className="w-full h-[300px] object-cover transition-transform duration-300 transform group-hover:scale-110 group-hover:translate-x-4"
                                />
                                <div
                                    className="absolute bottom-0 left-0 right-0 h-1/2 flex flex-col items-center justify-end p-4 bg-gradient-to-t from-[#001229] via-[#001f3f] to-transparent opacity-0 transform translate-y-full transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
                                >
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
}

export default Upcoming_Videos