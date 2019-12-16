import React from 'react';
import './App.css';

// import Animation from './components/bgAnimation';
import Home from "./components/home";
import Projects from './components/projects';
import Contact from './components/contact';
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
  return (
    <div className="main">
      {/* <Animation/> */}
      <Navbar/>
      <Home/>

      <div className="section2">
        <Projects/>
      </div>

      <div className="section3">
        <Contact/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
