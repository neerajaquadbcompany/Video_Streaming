import React, { useState } from 'react';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Footer';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: '',
  });

 
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhone = (phone) => {
    const regex = /^[0-9]{10}$/;
    return regex.test(phone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const { name, email, phone, address, message } = formData;

    
    if (!name || !email || !phone || !address || !message) {
      toast.error('Please fill out all fields',{
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });
      return;
    }

    
    if (!validateEmail(email)) {
      toast.error('Please enter a valid email');
      return;
    }

    
    if (!validatePhone(phone)) {
      toast.error('Please enter a valid 10-digit phone number');
      return;
    }

    
    toast.success('Message sent successfully!');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        
        <ToastContainer />

        <div className="w-full bg-[#1E272D] py-6">
          <div className="max-w-7xl flex justify-center items-center gap-3 mx-auto px-4">
            <h1 className="text-3xl font-bold text-white">Contact Us</h1>
            <nav className="text-sm mt-2">
              <Link to="/" className="text-gray-300 hover:text-white font-bold">
                Home
              </Link>
              <span className="mx-2 text-gray-500 font-bold">|</span>
              <Link to="/contact" className="text-gray-300 hover:text-white font-bold">
                Contact
              </Link>
            </nav>
          </div>
        </div>

        <div className="w-full max-w-4xl mt-10">
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-8">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="bg-[#1E272D] p-4 w-full text-gray-300 rounded-lg focus:outline-none"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
                className="bg-[#1E272D] p-4 w-full text-gray-300 rounded-lg focus:outline-none"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-8">
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="bg-[#1E272D] p-4 w-full text-gray-300 rounded-lg focus:outline-none"
                required
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                className="bg-[#1E272D] p-4 w-full text-gray-300 rounded-lg focus:outline-none"
                required
              />
            </div>
            <textarea
              name="message"
              placeholder="Write from here"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              className="bg-[#1E272D] p-4 w-full text-gray-300 rounded-lg focus:outline-none"
              required
            ></textarea>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div className="relative w-full mt-4 mb-3" style={{ paddingTop: '56.25%' }}>
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15142.395562582638!2d83.89398674221601!3d18.41109778208533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3c6a3b1321c981%3A0x1d4e8cc6d77148e6!2sAmadalavalasa%2C%20Andhra%20Pradesh%20532185!5e0!3m2!1sen!2sin!4v1729057305951!5m2!1sen!2sin"
        className="absolute top-0 left-0 w-full h-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
</div>

      </div>
      <Footer/>
    </>
  );
};

export default ContactForm;
