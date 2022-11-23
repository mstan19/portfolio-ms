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
  <div className='row h-100'>
    <div className='col-2 d-flex flex-column' style={{backgroundColor: 'rgb(20,20,20)'}}>
      <Header />
  
<hr></hr>
      <Navbar />
      <Footer />
      
    </div>

    <div className='col-10'style={{marginTop: '25px'}}>
        <Routes>
          <Route path="/aboutMe" element={<AboutMe />}></Route>
          <Route path="/projects" element={<Project />}></Route>
          <Route path="/resume" element={<Resume />}></Route>
          <Route path="/contactMe" element={<ContactMe />}></Route>
        </Routes>
      </div>
  </div>
  );
}

export default App;
