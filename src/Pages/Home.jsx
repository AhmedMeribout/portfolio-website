import React from "react";
import Typewriter from "typewriter-effect";
import NavBar from "../components/NavBar";


const Home = () => {
  return (
    <>
    

    <div className="flex h-screen items-center">

      <div className="flex flex-col justify-center w-1/2 space-y-4 pl-10">
        <div>
          <div className="text-white text-4xl">Hi There! 👋</div>
          <div className="text-white text-4xl">
            I'M <span className="text-green-400">MERIBOUT AHMED YAHIA</span>
          </div>
        </div>
        <div className="text-green-300 text-2xl">
          <Typewriter
            options={{
              strings: ['MERN Stack Developer','Cisco CCNA Certified','Cyber Security Enthusiast','Python','Java','pfSense','Linux','Golang','CI/CD','Automation'],
              autoStart: true,
              loop: true,
              delay: 30, 
              deleteSpeed: 20, 
            }}
          />
        </div>
      </div>
      <div className="w-1/2">
        {/* Add your image or any additional content here */}
      </div>
    </div>
    </>
  );
};

export default Home;
