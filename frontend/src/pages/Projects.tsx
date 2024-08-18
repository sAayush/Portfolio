import React, { useState } from "react"

interface Project {
  title: string
  description: string
  image: string
  githubLink: string
}

const projects: Project[] = [
  {
    title: "Project One",
    description:
      "This is a brief description of Project One. It is a web application built using React and Django.",
    image: "/path/to/project-one-image.jpg", // Replace with actual image paths
    githubLink: "https://github.com/username/project-one",
  },
  {
    title: "Project Two",
    description:
      "This is a brief description of Project Two. It showcases my skills in full-stack development.",
    image: "/path/to/project-two-image.jpg",
    githubLink: "https://github.com/username/project-two",
  },
  // Add more projects as needed
]

const Projects: React.FC = () => {
  const [view, setView] = useState<"grid" | "list">("grid")

  return (
    <>
      <div className="flex justify-end mb-6">
        <button
          onClick={() => setView("grid")}
          className={`mr-2 px-4 py-2 ${
            view === "grid" ? "bg-blue-500 text-white" : "bg-gray-700 text-gray-400"
          } rounded`}>
          Grid View
        </button>
        <button
          onClick={() => setView("list")}
          className={`px-4 py-2 ${
            view === "list" ? "bg-blue-500 text-white" : "bg-gray-700 text-gray-400"
          } rounded`}>
          List View
        </button>
      </div>
      <div
        className={`grid ${
          view === "grid" ? "grid-cols-1 md:grid-cols-2 gap-8" : "grid-cols-1"
        } gap-8`}>
        {projects.map(project => (
          <div
            key={project.title}
            className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center">
            <img
              src={project.image}
              alt={project.title}
              className="w-full md:w-1/3 h-auto rounded-md mb-4 md:mb-0 md:mr-6"
            />
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
              </div>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                View Project on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Projects
