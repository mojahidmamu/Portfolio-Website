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

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "C" },
      { name: "C++" },
      { name: "Java" },
      { name: "JavaScript" },
    ],
  },
  {
    title: "Markup & Styling",
    skills: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Tailwind CSS" },
      { name: "DaisyUI" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React JS" },
      { name: "React Router" },
      { name: "Redux Toolkit" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "REST API" },
    ],
  },
  {
    title: "Database & Authentication",
    skills: [
      { name: "MongoDB" },
      { name: "Firebase" },
      { name: "JWT" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "VS Code" },
      { name: "Figma" },
      { name: "Vercel" },
      { name: "Render" },
    ],
  },
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
      <div className="max-w-4xl mx-auto text-center space-y-6 mb-10">
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

      {/* Skills Categories */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-8">

        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-purple-500/20 transition-all duration-300 border border-gray-100 dark:border-gray-700"
          >
            <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-3 justify-center">
              {category.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-full bg-purple-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border border-purple-200 dark:border-gray-600 font-medium hover:scale-105 transition"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>


      {/* Competitive Programming Section */}
      <div className="max-w-4xl mx-auto mt-10 text-center">
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
