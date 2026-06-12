import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { FaDownload, FaGithub,FaLinkedin,  FaFacebook } from "react-icons/fa";
import Profile from "../../assets/home/Profile-image.jpg";
import myCV from "../../assets/home/Abdullah_Al_Mojahid_Resume.pdf"

const techStack = [
  "React JS",
  "JavaScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Firebase",
  "Redux Toolkit", 
  "REST API",
  "JWT Authentication", 
  "C++",
  "Problem Solving"
];

const AboutMe = () => {
  return (
    <div className="bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950">
      <Helmet>
        <title>My Portfolio | About</title>
      </Helmet>

      {/*  FLEX SECTION  */}
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-7xl mx-auto px-6 py-16">
        {/*  LEFT — IMAGE   */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-5/12 flex justify-center relative"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="relative group"
          >
            {/* spinning gradient */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-purple-500 via-indigo-500 to-green-400 rounded-full blur-md opacity-40 group-hover:opacity-90 transition duration-700 animate-spin-slow"></div>

            {/* image */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl z-10">
              <img
                src={Profile}
                alt="Abdullah all Mojahid"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* pulse ring */}
            <div className="absolute inset-0 rounded-full ring-8 ring-indigo-500/20 animate-pulse"></div>
          </motion.div>
        </motion.div>

        {/*   RIGHT — CONTENT   */}
        <div className="md:w-7/12 w-full">
          {/* Header */}
          <div className="space-y-4 mb-10">
            <h2 className="text-4xl md:text-5xl mt-8 font-extrabold">
              <span className="text-slate-900 dark:text-white">About </span>
              <span className="bg-gradient-to-r from-purple-500 via-indigo-500 to-teal-400 bg-clip-text text-transparent">
                Me
              </span>
            </h2>

            <div className="h-1 w-28 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500"></div>

            <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg">
              I am an aspiring{" "}
              <span className="font-bold underline underline-offset-4 decoration-indigo-500/60">
                Software Developer, Competitive Programmer, and Full-Stack Web Developer
              </span>{" "}
              passionate about solving complex problems and building scalable, secure, and impactful digital solutions.
            </p>
          </div>

          {/*   Stats Cards  */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
            {[
              {
                label: "Projects Done",
                value: "25+",
                color: "from-blue-500/20 to-blue-600/5",
                text: "text-blue-600",
              },
              {
                label: "Experience",
                value: "0+ Years",
                color: "from-green-500/20 to-green-600/5",
                text: "text-green-600",
              },
              {
                label: "Happy Clients",
                value: "0+",
                color: "from-purple-500/20 to-purple-600/5",
                text: "text-purple-600",
              },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -8 }}
                className={`bg-gradient-to-br ${stat.color} border border-indigo-200/30 rounded-2xl p-6 backdrop-blur-md shadow-sm`}
              >
                <h3 className={`text-2xl font-bold ${stat.text}`}>
                  {stat.value}
                </h3>
                <p className="text-xs font-bold mt-1 uppercase tracking-widest text-slate-500">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Tech Stack  */}
          <div className="space-y-3 mb-6">
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-500">
              Technical Prowess
            </h4>

            <div className="flex flex-wrap gap-3">
              {techStack.map((tech, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.08 }}
                  className="px-5 py-2 bg-slate-200/60 dark:bg-slate-800/60 border border-slate-300/30 rounded-full text-xs font-semibold backdrop-blur-sm hover:bg-indigo-600 hover:text-white transition"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/*  Buttons   */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-2"
          >
            {/* Download */}
            <a
              href={myCV}
              download
              className="flex items-center gap-2 
  bg-gradient-to-r from-indigo-600 to-purple-600
  text-white px-6 py-4 rounded-full font-semibold
  shadow-lg hover:shadow-purple-500/40
  hover:-translate-y-1 transition-all duration-300"
            >
              <FaDownload /> Download CV
            </a>

            {/* Github */}
            <a
              href="https://github.com/mojahidmamu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 
              bg-white/10 backdrop-blur-md
              border border-slate-300/40
              text-slate-800 dark:text-white
              px-8 py-4 rounded-full font-semibold
              hover:bg-black hover:text-white
              hover:-translate-y-1 transition-all duration-300"
            >
              <FaGithub className="text-xl" /> GitHub
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/abdullah-all-mojahid-a8a57b329/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 
                bg-blue-800 text-white
                px-8 py-4 rounded-full font-semibold
                hover:bg-blue-900 hover:-translate-y-1
                transition-all duration-300"
            >
              <FaLinkedin className="text-xl" /> LinkedIn
            </a>
             {/* Facebook */}
            <a
              href="https://www.facebook.com/abdullah.all.mojahid.2024"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 
                bg-blue-600 text-white
                px-8 py-4 rounded-full font-semibold
                hover:bg-blue-700 hover:-translate-y-1
                transition-all duration-300"
            >
              <FaFacebook className="text-xl" /> Facebook
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
