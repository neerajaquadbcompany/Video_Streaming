import React from 'react'
import Navigation from './Navigation'
import Carousel from'./Carousel'
import MovieList from './Video_List'
import Family_Videos from './Family_Videos'
import Image from './Image'

import Footer from './Footer'
const Home = () => {
  return (
    <div className='text-white'>
        <Navigation/>
        <Carousel/>
        <MovieList/>
        <Carousel/>
        {/* <Family_Videos/>
        <Image/> */}
        <Footer/>
        
    </div>
  )
}

export default Home