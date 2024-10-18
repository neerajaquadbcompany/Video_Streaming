import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton'; 
import 'react-loading-skeleton/dist/skeleton.css'; 
import Navigation from './Navigation';
import Footer from './Footer';
import { movies } from '../Util/Video_data';

const Upcoming_Page = () => {
  const navigate = useNavigate();
  const [visibleCount, setVisibleCount] = useState(4);
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); 
    }, 2000); 
    return () => clearTimeout(timer);
  }, []);

  const handleWatchNow = (movie) => {
    navigate('/video_details', { state: { movie } });
  };

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <div className='flex flex-col items-center justify-center flex-grow pl-5 pr-5'>
        <div className='text-white text-2xl font-semibold mt-4'>Upcoming Videos</div>
        <div className='border border-gray-700 mt-4 w-full max-w-6xl'></div>
        <div className="mt-4 mb-5 flex justify-center relative scrollbar-hidden overflow-hidden ">
          <div className="flex flex-col sm:flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 w-full max-w-6xl justify-center items-center">
            {isLoading
              ? Array.from({ length: visibleCount }).map((_, index) => (
                  <div key={index} className="flex flex-col flex-none relative overflow-hidden mb-5 rounded-lg shadow-lg" style={{ width: '250px' }}>
                    <Skeleton height={300} /> 
                    <div className="p-4">
                      <Skeleton width={180} /> 
                      <Skeleton width={100} style={{ marginTop: '10px' }} /> 
                    </div>
                  </div>
                ))
              : movies.slice(0, visibleCount).map((movie, index) => (
                  <div
                    key={index}
                    className="flex flex-col flex-none relative group overflow-hidden mb-5 rounded-lg shadow-lg cursor-pointer"
                    style={{ width: '250px' }}
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

        {visibleCount < movies.length ? (
          <button
            onClick={handleShowMore}
            className="mt-4 px-4 py-2 bg-transparent w-40 mb-3 flex mx-auto justify-center items-center border border-white rounded-full hover:bg-red-600 hover:border-0 text-white transition duration-300"
          >
            Show More
          </button>
        ) : (
          <div className="mt-4 text-red-600 text-center">No more upcoming videos present</div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Upcoming_Page;
