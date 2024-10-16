import React from 'react'
import Navigation from './Navigation'
import Carousel from'./Carousel'
import MovieList from './Video_List'
import Family_Videos from './Family_Videos'
import Image from './Image'
import AwardWinning_Videos from './AwardWinning_Videos'
import Footer from './Footer'
const Home = () => {
  return (
    <div>
        <Navigation/>
        <Carousel/>
        <MovieList/>
        <Carousel/>
        <Family_Videos/>
        <Image/>
        <AwardWinning_Videos/>
        <Footer/>
    </div>
  )
}

export default Home