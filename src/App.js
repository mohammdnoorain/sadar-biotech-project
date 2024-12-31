
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import ContactUs from './components/pages/ContactUs';
import ResearchAndDev from './components/pages/ResearchAndDev';
import About from './components/pages/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
   <>
      <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/aboutus" element={<About/>} />
        <Route path="/research" element={<ResearchAndDev />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
   
   
   </>
  );
}

export default App;
