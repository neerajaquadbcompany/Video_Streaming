import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ImageCarousel = () => {
  const navigate=useNavigate();
  const images = [
    {
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
    },
    {
      "image": "https://images.hdqwalls.com/download/avengers-end-game-hd-2j-1920x1080.jpg",
      "title": "Avengers: Infinity War",
      "videoLink": "https://youtu.be/reLB7v-_wsw?si=3lRtwg36k9YzKmBA",
      "director": "Anthony and Joe Russo",
      "starring": [
        "Josh Brolin",
        "Chris Hemsworth",
        "Scarlett Johansson",
        "Benedict Cumberbatch",
        "Tom Holland"
      ],
      "desp":"Avengers Endgame release in 2018",
      "description": "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation puts an end to the universe. This film brings together all the heroes from the Marvel Cinematic Universe in a battle against their most formidable foe yet."
    },
    {
      "image": "https://cdn.wallpapersafari.com/22/14/R1fhZF.jpg",
      "title": "Avengers: Age of Ultron",
      "videoLink": "https://youtu.be/reLB7v-_wsw?si=3lRtwg36k9YzKmBA",
      "director": "Joss Whedon",
      "starring": [
        "Robert Downey Jr.",
        "Chris Evans",
        "Mark Ruffalo",
        "Chris Hemsworth",
        "Scarlett Johansson"
      ],
      "desp":"Avengers Endgame release in 2018",
      "description": "When Tony Stark tries to jumpstart a dormant peacekeeping program, things go horribly wrong and it is up to the Avengers to stop the villainous Ultron from enacting his terrible plans. Avengers: Age of Ultron blends action, humor, and character development while expanding the Marvel Cinematic Universe."
    }
  ]


  const handleWatchNow = (movie) => {
    console.log("Clicked on carousel ==>",movie)
    navigate('/video_details', { state: { movie } });
  };
  

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showLines, setShowLines] = useState([false, false, false]); 

  
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextImage();
    }, 5000);

    return () => clearInterval(intervalId); 
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
  }, [currentIndex]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative h-[500px] overflow-hidden group">
      <img
        src={images[currentIndex].image}
        alt={`Image ${currentIndex + 1}`}
        className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
      />
      <div className="absolute inset-0 bg-gradient-to-l from-black via-transparent to-black opacity-70"></div>
      <div className="absolute top-1/2 left-28 transform -translate-y-1/2">
        <h2
          className={`text-2xl lg:text-6xl font-bold transition-transform duration-500 ease-in-out mb-4 text-white ${showLines[0] ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
        >
          {images[currentIndex].title}
        </h2>
        <p
          className={`mb-4 transition-transform duration-500 ease-in-out text-white  ${showLines[1] ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
        >
          {images[currentIndex].desp}
        </p>
        <button
          onClick={()=>{handleWatchNow(images[currentIndex])}}
          className={`inline-block px-4 py-2 bg-red-600 rounded text-white text-center font-semibold hover:bg-red-700 transition-transform duration-500 ease-in-out ${showLines[2] ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
        >
          Watch Now
        </button>
      </div>
      
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 text-red-600 hover:text-white focus:outline-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <FaChevronLeft size={24} />
      </button>
      
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 text-red-600 hover:text-white focus:outline-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <FaChevronRight size={24} />
      </button>
    </div>
  );
};

export default ImageCarousel;
