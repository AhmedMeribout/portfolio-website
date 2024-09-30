import React from "react";
import Typewriter from "typewriter-effect";
import NavBar from "../components/NavBar";
import HomeImage from "../assets/Cyber-attack-amico.png"


const Home = () => {
  return (
    <>
    
    <div className="flex h-screen items-center">

      <div className="flex flex-col justify-center w-1/2 space-y-4 pl-10">
        <div>
          <img  src="https://tryhackme-badges.s3.amazonaws.com/ahmedmeribout02.png" alt="TryHackMe" className="w-1/2 mb-8" ></img>
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
        <script src="https://tryhackme.com/badge/2779942"></script>
        
      </div>
      
      <div className="w-1/2 flex justify-center">

      <img className="w-2/3" src={HomeImage} alt="Home Image"/>
      </div>
    </div>

    
    </>
  );
};

export default Home;
