import React from 'react';
import Navbar from "./components/NavBar";

const Layout = ({ children }) => {
  return (
    <div >
      <Navbar className="w-full fixed" />
      
      <main className="mt-16 p-4">
        {children}
      </main>
    </div>
  );
};

export default Layout;
