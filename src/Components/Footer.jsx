import React from 'react';
import {  FaMapMarkerAlt, FaPhone, FaEnvelopeOpen, FaTelegramPlane } from 'react-icons/fa';
import { LuFacebook } from "react-icons/lu";
import { SiGoogle } from "react-icons/si";
import { TfiTwitter } from "react-icons/tfi";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
const Footer = () => {
  return (
    <footer className="bg-[#151414] relative">
      <div className="container mx-auto">
        
        <div className="border-b border-[#373636] pt-5 pb-5">
          <div className="flex flex-wrap justify-between">
            
            <div className="mb-6 md:w-1/3">
              <div className="flex items-start">
              <FaMapMarkerAlt className="text-orange-500 text-3xl mr-4" />
                <div className="pl-4">
                  <h4 className="text-white text-lg font-semibold mb-1">Find us</h4>
                  <span className="text-[#757575] text-sm">1010 Avenue, sw 54321, Chandigarh</span>
                </div>
              </div>
            </div>

            
            <div className="mb-6 md:w-1/3">
              <div className="flex items-start">
              <FaPhone className="text-orange-500 text-3xl mr-4" />
                <div className="pl-4">
                  <h4 className="text-white text-lg font-semibold mb-1">Call us</h4>
                  <span className="text-[#757575] text-sm">9876543210 0</span>
                </div>
              </div>
            </div>

            
            <div className="mb-6 md:w-1/3">
              <div className="flex items-start">
              <FaEnvelopeOpen className="text-orange-500 text-3xl mr-4" />
                <div className="pl-4">
                  <h4 className="text-white text-lg font-semibold mb-1">Mail us</h4>
                  <span className="text-[#757575] text-sm">mail@info.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        <div className="pt-5 pb-5">
          <div className="flex flex-wrap">
            
            <div className="mb-6 w-full md:w-1/3">
              <div className="mb-6">
                <a href="index.html">
                  <img src={logo} className="w-48" alt="logo" />
                </a>
              </div>
              <p className="text-[#7e7e7e] text-sm leading-7 mb-6">
                Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing elit.
              </p>
              <div className='flex flex-col'>
                <span className="text-white text-lg font-semibold block mb-4">Follow us</span>
                <div className='flex gap-3'>
                    <Link href="#" className="text-white ">
                    <LuFacebook  className='text-white'/>
                    </Link>
                    <Link href="#" className="text-white ">
                    <SiGoogle className='text-white'/>
                    </Link>
                    <Link href="#" className="text-white">
                    <TfiTwitter className='text-white'/>
                    </Link>
                    <Link href="#" className="text-white ">
                    <FaSquareInstagram className='text-white'/>
                    </Link>
                    <Link to="#" className="text-white">
                    <IoLogoYoutube  className='text-white'/>
                    </Link>
                </div>
                
              </div>
            </div>

            
            <div className="mb-6 w-full md:w-1/3">
              <h3 className="text-white text-lg font-semibold mb-8 relative before:content-[''] before:absolute before:bottom-[-15px] before:left-0 before:h-[2px] before:w-[50px] before:bg-[#ff5e14]">
                Useful Links
              </h3>
              <ul className="flex flex-wrap">
                <li className="w-1/2 mb-3">
                  <Link href="/" className="text-[#878787] hover:text-[#ff5e14]">Home</Link>
                </li>
                <li className="w-1/2 mb-3">
                  <Link href="/series" className="text-[#878787] hover:text-[#ff5e14]">Services</Link>
                </li>
                <li className="w-1/2 mb-3">
                  <Link href="/about" className="text-[#878787] hover:text-[#ff5e14]">About</Link>
                </li>

                
                <li className="w-1/2 mb-3">
                  <Link href="/contact" className="text-[#878787] hover:text-[#ff5e14]">Contact</Link>
                </li>
              </ul>
            </div>

            
            <div className="w-full md:w-1/3">
              <h3 className="text-white text-lg font-semibold mb-8 relative before:content-[''] before:absolute before:bottom-[-15px] before:left-0 before:h-[2px] before:w-[50px] before:bg-[#ff5e14]">
                Subscribe
              </h3>
              <p className="text-[#7e7e7e] text-sm leading-7 mb-6">Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
              <div className="relative">
                <input type="text" placeholder="Email Address" className="w-full p-4 bg-[#2E2E2E] text-white border border-[#2E2E2E]"/>
                <button className="absolute top-0 right-0 bg-[#ff5e14] p-5">
                <FaTelegramPlane />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

     
      <div className="bg-[#202020] py-6">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <p className="text-[#878787] text-sm text-center md:text-left">
            Copyright &copy; 2018, All Rights Reserved <a href="https://codepen.io/anupkumar92/" className="text-[#ff5e14]">Streamo</a>
          </p>
          <ul className="hidden md:flex">
            <li className="ml-6"><a href="#" className="text-[#878787] hover:text-[#ff5e14]">Home</a></li>
            <li className="ml-6"><a href="#" className="text-[#878787] hover:text-[#ff5e14]">Terms</a></li>
            <li className="ml-6"><a href="#" className="text-[#878787] hover:text-[#ff5e14]">Privacy</a></li>
            <li className="ml-6"><a href="#" className="text-[#878787] hover:text-[#ff5e14]">Policy</a></li>
            <li className="ml-6"><a href="#" className="text-[#878787] hover:text-[#ff5e14]">Contact</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
