import React from 'react';

import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

const Resume = () => {
  const pdfUrl = "http://localhost:5000/src/assets/M2-MeriboutAhmed.pdf";

  return (
    <div className="flex flex-col justify-center items-center h-full p-5">
      <div className="w-full max-w-3xl h-4/5 rounded-lg shadow-2xl border border-gray-200 mb-4 overflow-auto z-0">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
          <Viewer fileUrl={pdfUrl} />
        </Worker>
      </div>
      <a 
        href={pdfUrl}
        download="M2-MeriboutAhmed.pdf"
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Download Resume
      </a>
    </div>
  );
};

export default Resume;