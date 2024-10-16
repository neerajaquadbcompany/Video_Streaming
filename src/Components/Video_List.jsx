import React from 'react';
import Lastest_Videos from './Lastest_Videos';
import Old_Videos from './Old_Videos';
import Upcoming_Videos from './Upcoming_Videos';



const MovieList = () => {

  

  return (
    <div className='ml-5 mr-5 lg:ml-20 lg:mr-20 '>
      <Lastest_Videos/>
      <Upcoming_Videos/>
      <Old_Videos/>
    </div>
  );
};

export default MovieList;
