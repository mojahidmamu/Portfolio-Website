import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Profile from "../../assets/home/profile.jpeg";

import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTypescript,
} from "react-icons/si";

const subtitles = [
  "a Full Stack Developer |",
  "a Competitive Programmer |",
  "a Front End Developer |",
  "a Web Developer |",
  "a Problem Solver |",
  "a React JS Developer |",
  "a Dedicated Learner |",
  "a MERN Stack Developer |",
  "a Technology Enthusiast |",
  "a Backend Developer",
];

const BannerSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setDisplayText(subtitles[currentIndex].slice(0, i));
      i++;

      if (i > subtitles[currentIndex].length) {
        clearInterval(interval);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % subtitles.length);
        }, 1400);
      }
    }, 80);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-12 lg:px-20 pt-20 relative overflow-hidden bg-gradient-to-b from-white to-slate-100">
      {/* Background Glow */}
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-purple-500/10 blur-3xl"
      />

      <motion.div
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-green-500/10 blur-3xl"
      />

      {/*  LEFT  */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="md:w-1/2 space-y-6 text-center md:text-left z-10"
      >
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold">
          Hi, I’m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-green-500">
            Mojahid
          </span>
        </h1>

        {/* Typing subtitle */}
        <h2 className="text-lg sm:text-xl lg:text-2xl min-h-[32px] flex items-center justify-center md:justify-start gap-2 text-slate-600">
          {displayText}
          <span className="border-r-2 border-indigo-500 animate-pulse ml-1 h-6"></span>

          {/* icon switch */}
          <span className="ml-2">
            {currentIndex === 0 && (
              <SiJavascript className="text-yellow-500 text-2xl" />
            )}
            {currentIndex === 1 && (
              <SiMongodb className="text-green-600 text-2xl" />
            )}
            {currentIndex === 2 && (
              <SiReact className="text-blue-400 text-2xl" />
            )}
            {currentIndex === 3 && (
              <SiHtml5 className="text-orange-500 text-2xl" />
            )}
            {currentIndex === 4 && (
              <SiCss3 className="text-blue-500 text-2xl" />
            )}
            {currentIndex === 5 && (
              <SiTypescript className="text-blue-600 text-2xl" />
            )}
            {currentIndex === 6 && (
              <SiNodedotjs className="text-green-600 text-2xl" />
            )}
          </span>
        </h2>

        <p className="max-w-lg mx-auto md:mx-0 text-base sm:text-lg text-slate-600">
          Aspiring Software Developer with a strong foundation in Full-Stack Web Development and Competitive Programming. <br />
          I build responsive, scalable, and user-centric applications.  <br />
          I enjoy solving complex problems, writing clean code, and creating impactful digital experiences through technology.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
          <Link
            to="/projects"
            className="bg-indigo-600 text-white px-8 py-3 rounded-full shadow-lg font-semibold hover:scale-105 hover:bg-indigo-700 transition duration-300 text-center"
          >
            🚀 Get Started
          </Link>

          <Link
            to="/contact"
            className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-600 hover:text-white transition duration-300 text-center"
          >
            📩 Contact Me
          </Link>
        </div>
      </motion.div>

      {/*   RIGHT IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="md:w-1/2 flex justify-center mt-12 md:mt-0 z-10"
      >
        <div className="relative rounded-full p-1 bg-gradient-to-tr from-purple-600 to-green-500 shadow-2xl">
          <div className="rounded-full overflow-hidden w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-white">
            <img
              src={Profile}
              alt="Profile"
              className="w-full h-full object-cover hover:scale-110 transition duration-500"
            />
          </div>

          {/* pulse ring */}
          <div className="absolute inset-0 rounded-full ring-4 ring-indigo-500/20 animate-ping -z-10"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default BannerSection;
