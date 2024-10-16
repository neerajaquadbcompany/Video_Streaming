
import './index.css';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import ContactForm from './Components/ContactForm';
import VideoDetails from './Components/Video_Details';
import AboutUs from './Components/About.jsx'
import Upcoming_Page from './Components/Upcoming_page.jsx';
import Old_Page from './Components/Old_page.jsx';
import Latest_Page from './Components/Lastest_Page.jsx';
function App() {
  return (
    <Router>
      <div >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/video_details" element={<VideoDetails />} />
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/upcoming_page' element={<Upcoming_Page/>}/>
          <Route path ='/old_videos' element={<Old_Page/>}/>
          <Route path='/latest_videos' element={<Latest_Page/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
