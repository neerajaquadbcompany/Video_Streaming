import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import ReactPlayer from 'react-player';

const AboutUs = () => {
  return (
    <>
      <Navigation />
      <div className="flex flex-col items-center justify-center w-full p-2.5 px-[50px] lg:px-12">
      <div className="flex flex-col lg:flex-row items-center justify-center max-w-[1320px] mx-auto mt-20 mb-12 lg:mb-12">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
          <p className="text-[#ff5e14] text-xl font-bold mb-2">About</p>
          <p className="text-gray-700 text-2xl font-bold mb-4">We build to your bespoke</p>
          <p className="text-white text-lg mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum pulvinar ullamcorper
            suspendisse ac eget. Pellentesque tempus leo in ullamcorper quis vestibulum ligula
            elementum ut. Congue in dignissim tincidunt ut dolor eu. Mi, eget posuere vitae sed purus
            nisl lorem.
          </p>
          <button
            onClick={() => window.open("https://www.youtube.com/c/SpaceX", "_blank", "noopener noreferrer")}
            className="bg-[#ff5e14] text-white text-lg font-semibold py-2 px-12 rounded-lg shadow-lg hover:bg-[#ffebeA] hover:text-[#ff5e14] transition-colors duration-300"
          >
            View More
          </button>
        </div>

        {/* Video Section */}
        <div className="w-full lg:w-1/2 relative">
        <ReactPlayer
          url="https://youtu.be/zgN373ZDtJg?si=E1gNKkoDmiBV9Gih"
          className='react-player'
          width='100%'
          height='500px'
          controls
        />
          
        </div>
      </div>
    </div>
      <Footer />
    </>
  );
};

export default AboutUs;
