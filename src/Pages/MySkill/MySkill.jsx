import React from "react";
import { Helmet } from "react-helmet-async";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiRedux,
  SiTailwindcss,
  SiFirebase,
  SiGoland,
  SiGithub,
  SiVercel,
} from "react-icons/si";

import { FaGitAlt, FaFigma } from "react-icons/fa";

const skills = [
  { name: "HTML5", icon: <SiHtml5 className="text-orange-500 w-12 h-12" /> },
  { name: "CSS3", icon: <SiCss3 className="text-blue-500 w-12 h-12" /> },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-400 w-12 h-12" />,
  },
  { name: "React JS", icon: <SiReact className="text-blue-400 w-12 h-12" /> },
  {
    name: "Node JS",
    icon: <SiNodedotjs className="text-green-600 w-12 h-12" />,
  },
  { name: "MongoDB", icon: <SiMongodb className="text-green-700 w-12 h-12" /> },
  { name: "Java", icon: <SiJavascript className="text-red-500 w-12 h-12" /> }, // placeholder
  {
    name: "Express.js",
    icon: <SiExpress className="text-gray-700 w-12 h-12" />,
  },
  { name: "Redux", icon: <SiRedux className="text-purple-600 w-12 h-12" /> },
  {
    name: "React Router",
    icon: <SiReact className="text-blue-400 w-12 h-12" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-teal-400 w-12 h-12" />,
  },
  {
    name: "DaisyUI",
    icon: <SiTailwindcss className="text-teal-300 w-12 h-12" />,
  },
  {
    name: "Firebase",
    icon: <SiFirebase className="text-yellow-500 w-12 h-12" />,
  },
  { name: "C", icon: <SiJavascript className="text-blue-700 w-12 h-12" /> },  
  { name: "C++", icon: <SiJavascript className="text-blue-500 w-12 h-12" /> },
  { name: "DSA", icon: <SiJavascript className="text-yellow-400 w-12 h-12" /> }, 
  { name: "Go", icon: <SiGoland className="text-blue-600 w-12 h-12" /> }, 
  { name: "Git", icon: <FaGitAlt className="text-red-600 w-12 h-12" /> },
  { name: "GitHub", icon: <SiGithub className="text-gray-900 w-12 h-12" /> },
  { name: "VS Code", icon: <SiVercel className="text-purple-500 w-12 h-12" /> },
  { name: "Figma", icon: <FaFigma className="text-pink-500 w-12 h-12" /> },
  { name: "Vercel", icon: <SiVercel className="text-black w-12 h-12" /> },
];

const cpProfiles = [
  {
    name: "Codeforces (Pupil)",
    link: "https://codeforces.com/profile/Abdullah_all_Mojahid",
    color: "text-blue-500",
  },
  {
    name: "CodeChef (2★)",
    link: "https://www.codechef.com/users/mojahidmamu",
    color: "text-yellow-500",
  },
];

const MySkill = () => {
  return (
    <div className="py-20 px-6 md:px-12 lg:px-20 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <Helmet>
        <title>My Portfolio | Skills</title>
      </Helmet>

      {/* Header */}
      <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          <span className="text-slate-900 dark:text-white">My </span>
          <span className="bg-gradient-to-r from-purple-500 via-indigo-500 to-teal-400 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>

        <div className="flex justify-center">
          <span className="h-1 w-28 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500"></span>
        </div>

        <p className="max-w-2xl mx-auto text-slate-500 text-base md:text-lg">
          I specialize in web development and programming, focusing on
          performance, scalability, and clean code.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-purple-500/20 transition transform hover:-translate-y-2"
          >
            {skill.icon}
            <span className="mt-4 font-semibold text-gray-900 dark:text-white text-lg text-center">
              {skill.name}
            </span>
          </div>
        ))}
      </div>


      {/* Competitive Programming Section */}
      <div className="max-w-4xl mx-auto mt-20 text-center">
        <h3 className="text-3xl font-bold mb-6">🏆 Competitive Programming</h3>

        <div className="flex flex-wrap justify-center gap-6">
          {cpProfiles.map((profile, index) => (
            <a
              key={index}
              href={profile.link}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-4 rounded-xl bg-white dark:bg-gray-800 shadow hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <span className={`font-semibold ${profile.color}`}>
                {profile.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MySkill;
