import React from "react";
import { Helmet } from "react-helmet-async";
import ProjectCard from "./ProjectCard";
import { projectsData } from "./projectsData";

const Projects = () => {
  return (
    <section className="min-h-screen py-20 px-6 sm:px-12 lg:px-20 bg-background text-foreground transition-colors duration-500">
      <Helmet>
        <title>My Portfolio | Projects</title>
      </Helmet>

      {/* Header Section */}
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          <span className="text-slate-900 dark:text-white"> 🚀 My </span>
          <span className="bg-gradient-to-r from-purple-500 via-indigo-500 to-teal-400 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        <div className="flex justify-center">
          <span className="h-1 w-28 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500"></span>
        </div>

        <p className="max-w-2xl mx-auto text-slate-500 text-base md:text-lg">
          A showcase of my recent works — built with modern technologies and
          clean UI/UX. Explore the live demos or check the source code!
        </p>
      </div>

      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
        {projectsData.map((item) => (
          <ProjectCard key={item.id} project={item} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
