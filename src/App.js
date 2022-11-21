import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Project from './components/Project';
import Resume from './components/Resume';
import ContactMe from './components/ContactMe';
import { Routes, Route } from 'react-router-dom';

function App() {
  return ( 
  <div>
    <Header />
    <Navbar />
    <div className='container'>
      <Routes>
        <Route path="/aboutMe" element={<AboutMe />}></Route>
        <Route path="/projects" element={<Project />}></Route>
        <Route path="/resume" element={<Resume />}></Route>
        <Route path="/contactMe" element={<ContactMe />}></Route>
      </Routes>
    </div>
    <Footer />
  </div>
  );
}

export default App;
