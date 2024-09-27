import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Trainers from './pages/Trainers.jsx'
import Classes from './pages/Classes.jsx'
import About from './pages/About.jsx'
import SignUp from  './pages/SignUp.jsx'
import Layout from './components/Layout.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

export default function App() {
  return (
    <>
    <Router>
    <ScrollToTop />
      <Routes>
       <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/> 
          <Route path="/Trainers" element={<Trainers/>}/>
          <Route path="/Classes" element={<Classes/>}/>
          <Route path="/SignUp" element={<SignUp/>}/>
       </Route>
      </Routes>
    </Router>
    </>
  );
}


