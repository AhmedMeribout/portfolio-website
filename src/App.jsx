import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from './Layout';
import Resume from './Pages/Resume';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import About from './Pages/About';


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="resume" element={<Resume/>} />
          <Route path='projects' element={<Projects/>} />
          <Route path='blog' element={<Blog/>} />
          <Route path='about' element={<About/>} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
