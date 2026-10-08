import { Github, ExternalLink } from "lucide-react";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white dark:bg-gray-900 shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-5 space-y-3">
        <h3 className="text-xl font-bold">{project.title}</h3>

        <p className="text-gray-600 dark:text-gray-400 text-sm">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-2">
          {project.topics.map((topic, i) => (
            <span
              key={i}
              className="
        px-3 py-1 text-xs font-medium
        rounded-full
        border border-transparent
        bg-gradient-to-r from-purple-400 via-pink-400 to-red-400
        text-white
        shadow-sm
        hover:scale-105 hover:shadow-md
        transition-all duration-300
        cursor-default
        dark:from-purple-600 dark:via-pink-600 dark:to-red-600
      "
            >
              {topic}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-1 pt-4 flex-nowrap">
          {/* Live Demo */}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="
        flex-1 flex items-center justify-center gap-1
        bg-gradient-to-r from-emerald-500 to-teal-500
        hover:from-emerald-600 hover:to-teal-600
        text-white py-2.5 rounded-xl
        text-sm font-semibold
        shadow-md hover:shadow-lg
        transition-all duration-300
        hover:-translate-y-0.5
        whitespace-nowrap
      "
            >
              <ExternalLink size={18} />
              Live Demo
            </a>
          )}

          {/* Frontend Code */}
          {project.frontend && (
            <a
              href={project.frontend}
              target="_blank"
              rel="noopener noreferrer"
              title="View Frontend Source Code"
              className="
        flex-1 flex items-center justify-center gap-1
        py-2.5 rounded-xl
        text-sm font-semibold
        border border-gray-200 dark:border-gray-700
        bg-white dark:bg-gray-800
        text-gray-700 dark:text-gray-200
        hover:bg-gray-900 hover:text-white
        dark:hover:bg-white dark:hover:text-black
        shadow-sm hover:shadow-md
        transition-all duration-300
        hover:-translate-y-0.5
        whitespace-nowrap
      "
            >
              <Github size={18} />
              Frontend
            </a>
          )}

          {/* Backend Code */}
          {project.backend && (
            <a
              href={project.backend}
              target="_blank"
              rel="noopener noreferrer"
              title="View Backend Source Code"
              className="
        flex-1 flex items-center justify-center gap-1
        py-2.5 rounded-xl
        text-sm font-semibold
        border border-gray-200 dark:border-gray-700
        bg-white dark:bg-gray-800
        text-gray-700 dark:text-gray-200
        hover:bg-gray-900 hover:text-white
        dark:hover:bg-white dark:hover:text-black
        shadow-sm hover:shadow-md
        transition-all duration-300
        hover:-translate-y-0.5
        whitespace-nowrap
      "
            >
              <Github size={18} />
              Backend
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
