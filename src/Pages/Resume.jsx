import React from 'react';
import resume from '../assets/M2-MeriboutAhmed.png';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

const Resume = () => {
  
  return (
    <div className="flex flex-col justify-center items-center h-full p-5">
    <img src={resume}/>
    </div>
  );
};

export default Resume;