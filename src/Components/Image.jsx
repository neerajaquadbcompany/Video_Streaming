import React from 'react';
import zoom from '../assets/vek-labs-e8ofKlNHdsg-unsplash.jpg';

const Image = () => {
  return (
    <div className='relative w-full h-[500px] overflow-hidden'>
      {/* Image with zoom effect */}
      <img
        src={zoom}
        alt=''
        className='w-full h-full object-cover transition-transform duration-700 ease-in-out transform hover:scale-110'
      />
      
      {/* Text overlay, positioned at the left center */}
      <div className='absolute left-20 top-1/2 transform -translate-y-1/2 text-white'>
        <div className='text-6xl font-bold'>ICP Projects</div>
        <div className='text-3xl'>Video series</div>
      </div>
    </div>
  );
};

export default Image;
