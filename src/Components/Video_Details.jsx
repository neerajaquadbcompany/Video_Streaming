import React from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { GrFacebookOption, GrTwitter } from "react-icons/gr";
import { ImLinkedin2 } from "react-icons/im";
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import Footer from './Footer';
import Recommended from './Recommended';
import Navigation from './Navigation';

const VideoDetails = () => {
  const location = useLocation();
  const { movie } = location.state || {};

  if (!movie || !movie.videoLink) {
    return <div className="text-white text-center">Loading or invalid video details...</div>;
  }

  return (
    <>
      <Navigation />
      <div className='p-4 text-xl text-white font-semibold text-center bg-[#1E272D]'>
        {movie.title}
      </div>
      <div className="max-w-[900px] mx-auto p-8 gap-3 flex flex-col">
        <ReactPlayer
          url={movie.videoLink}
          className='react-player'
          width='100%'
          height='500px'
          controls
        />

        <div className='flex gap-2 items-center mt-5'>
          <div className='text-red-600 font-semibold text-md'>Director:</div>
          <div className='text-white text-sm mt-1'>{movie.director}</div>
        </div>
        <div className='flex gap-2 items-center'>
          <div className='text-red-600 font-semibold text-md'>Starring:</div>
          <div className='text-white text-sm mt-1'>{movie.starring.join(', ')}</div>
        </div>
        <p className="text-white text-sm mt-4">{movie.description}</p>
        <hr className='mt-3' />
        <div className='mt-4 flex justify-between items-center '>
          <div className='flex gap-2 items-center'>
            <div className='text-red-600 font-semibold text-md'>Share:</div>
            <div className='flex gap-3'>
              <div className='h-8 w-8 bg-white rounded-full flex justify-center items-center'>
                <GrFacebookOption />
              </div>
              <div className='h-8 w-8 bg-white rounded-full flex justify-center items-center'>
                <GrTwitter />
              </div>
              <div className='h-8 w-8 bg-white rounded-full flex justify-center items-center'>
                <ImLinkedin2 />
              </div>
            </div>
          </div>
          <div className='flex items-center '>
            <BiSolidLike className='text-white' style={{ fontSize: '30px' }} />
            <BiSolidDislike className='text-white' style={{ fontSize: '30px' }} />
          </div>
        </div>
        <hr className='mt-3' />
        <Recommended />
      </div>

      <Footer />
    </>
  );
};

export default VideoDetails;
