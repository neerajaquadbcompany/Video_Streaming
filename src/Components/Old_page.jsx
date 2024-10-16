import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import {movies} from '../Util/Video_data'
const image ={
    "image": "https://wallpaperaccess.com/full/1079187.jpg",
      "title": "Avengers: Endgame",
      "videoLink": "https://youtu.be/reLB7v-_wsw?si=3lRtwg36k9YzKmBA",
      "director": "Anthony and Joe Russo",
      "starring": [
        "Robert Downey Jr.",
        "Chris Evans",
        "Mark Ruffalo",
        "Scarlett Johansson",
        "Chris Hemsworth"
      ],
      "desp":"Avengers Endgame release in 2018",
      "description": "After the devastating events of Avengers: Infinity War, the remaining Avengers must assemble once more to reverse the actions of Thanos and restore balance to the universe. With a blend of humor, heart, and epic battles, Avengers: Endgame marks a monumental conclusion to the Infinity Saga."
    }
    
const  Old_Page = () =>{
    const navigate=useNavigate();
    const [showLines, setShowLines] = useState([false, false, false]); 
    useEffect(() => {
        
      }, []);
    
      
      useEffect(() => {
        const newShowLines = [false, false, false]; 
        setShowLines(newShowLines);
    
        const timeoutIds = [];
        for (let i = 0; i < newShowLines.length; i++) {
          const timeoutId = setTimeout(() => {
            newShowLines[i] = true; 
            setShowLines([...newShowLines]);
          }, i * 500);
          timeoutIds.push(timeoutId);
        }
    
        return () => timeoutIds.forEach(clearTimeout); 
      }, []);


      const handleWatchNow = (movie) => {
        console.log("Clicked on carousel ==>",movie)
        navigate('/video_details', { state: { movie } });
      };
      const [visibleCount, setVisibleCount] = useState(4); 

    const handleShowMore = () => {
        setVisibleCount(prevCount => prevCount + 4); 
    };
    return(
        <div>
            <Navigation/>
            <div className="relative h-[500px] overflow-hidden group">
      <img
        src={image.image}
        alt=''
        className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
      />
      <div className="absolute inset-0 bg-gradient-to-l from-black via-transparent to-black opacity-70"></div>
      <div className="absolute top-1/2 left-28 transform -translate-y-1/2">
        <h2
          className={`text-2xl lg:text-6xl font-bold transition-transform duration-500 ease-in-out mb-4 text-white ${showLines[0] ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
        >
          {image.title}
        </h2>
        <p
          className={`mb-4 transition-transform duration-500 ease-in-out text-white  ${showLines[1] ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
        >
          {image.desp}
        </p>
        <button
          onClick={()=>{handleWatchNow(image)}}
          className={`inline-block px-4 py-2 bg-red-600 rounded text-white text-center font-semibold hover:bg-red-700 transition-transform duration-500 ease-in-out ${showLines[2] ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
        >
          Watch Now
        </button>
      </div>
        
    </div>
    <div className='flex flex-col ml-5 mr-5 lg:ml-20 lg:mr-20'>
            <div className='flex justify-between mt-4 items-center'>
                <div className='text-white text-2xl font-semibold'>Old Videos</div>
            </div>

            <div className='border border-gray-700 mt-4'></div>

            <div className="mt-4 mb-5 flex justify-center relative scrollbar-hidden overflow-hidden ml-5">
                <div className="flex flex-col sm:flex-col sm:justify-center sm:mx-auto md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 overflow-x-hidden w-full scrollbar-hidden">
                    {movies.slice(0, visibleCount).map((movie, index) => (
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
                    className="mt-4 px-4 py-2 bg-transparent w-40 mb-3 flex mx-auto justify-center items-center border border-white rounded-full hover:bg-red-600 hover:border-0 text-white   transition duration-300"
                >
                    Show More
                </button>
            ) : (
                <div className="mt-4 text-red-600 text-center">No more upcoming videos present</div>
            )}
        </div>
            <Footer/>
        </div>
    );
}
export default Old_Page;