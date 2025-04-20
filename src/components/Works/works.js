import React, { useState } from "react";
import "./works.css";
import Portfolio1 from "../../assets/smart.png";
import Portfolio2 from "../../assets/ABC.png";
import Portfolio3 from "../../assets/smapath.jpg";
import Portfolio4 from "../../assets/arogya.jpg";
import Portfolio5 from "../../assets/Bahunia.jpg";
import Portfolio6 from "../../assets/slcyelonway.png";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";


const Works = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Smart Physotherphy Assitent",
      image: Portfolio1,
      description:
        "A full-featured online store with cart functionality, user authentication, and payment processing.",
      technologies: ["Flask", "Python", "Mediapipe"],
      liveUrl: "",
      githubUrl:
        "https://github.com/supundulaksha/excesise_proj",
    },
    {
      id: 2,
      title: "Resturant Management System",
      image: Portfolio2,
      description:
        "Productivity application for organizing tasks with drag-and-drop functionality and team collaboration.",
      technologies: [
        "React JS",
        "Vite JS",
        "Tailwind CSS",
        "Springboot",
        "Spring MVC",
        "Material UI",
        "MYSQL",
      ],
      liveUrl: "",
      githubUrl: "https://github.com/supundulaksha/ABCresturant",
    },
    {
      id: 3,
      title: "Sampath Bank Website",
      image: Portfolio3,
      description:
        "Mobile-responsive application for tracking workouts, nutrition, and health metrics.",
      technologies: ["HTML", "CSS", "JS"],
      liveUrl: "",
      githubUrl: "https://github.com/supundulaksha/Sampathbank",
    },
    {
      id: 4,
      title: "Arogya Hospital Management System",
      image: Portfolio4,
      description:
        "Analytics dashboard for social media managers with real-time data visualization.",
      technologies: ["HTML", "CSS", "JS", "Bootstrap", "PHP"],
      liveUrl: "",
      githubUrl: "https://github.com/supundulaksha/arogya",
    },
    {
      id: 5,
      title: "Bahunia Clothing Management",
      image: Portfolio5,
      description:
        "Interactive map-based application for planning and sharing travel itineraries.",
      technologies: ["HTML", "CSS", "JS", "Bootstrap", "PHP"],
      liveUrl: "",
      githubUrl: "https://github.com/supundulaksha/Bahunia",
    },
    {
      id: 6,
      title: "SL Ceylonway Woocommerce Website",
      image: Portfolio6,
      description:
        "Web application leveraging OpenAI's API to generate marketing content and blog posts.",
      technologies: ["HTML", "CSS", "JS", "Bootstrap", "PHP", "Wordpress"],
      liveUrl: "http://slceylonway.com",
      githubUrl: "",
    },
  ];

  const openProject = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section id="works" className="worksSection">
      <div className="worksContainer">
        <h2 className="worksTitle">My Portfolio</h2>
        <span className="worksDesc">
          I take pride in crafting exceptional digital experiences with
          attention to detail. Each project represents my commitment to quality
          and innovation.
        </span>

        <div className="projectsGrid">
          {projects.map((project) => (
            <div
              key={project.id}
              className="projectCard"
              onClick={() => openProject(project)}>
              <img
                src={project.image}
                alt={project.title}
                className="projectImage"
              />
              <div className="projectOverlay">
                <div className="overlayContent">
                  <h3 className="projectTitle">{project.title}</h3>
                  <button className="projectViewBtn">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <a
          href="https://github.com/supundulaksha"
          target="_blank"
          rel="noopener noreferrer">
          <button className="workBtn">View More Projects</button>
        </a>
      </div>

      {showModal && selectedProject && (
        <div className="projectModal">
          <div className="modalOverlay" onClick={closeModal}></div>
          <div className="modalContent">
            <button className="closeModal" onClick={closeModal}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </button>
            <div className="modalColumns">
              <div className="modalImageColumn">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="modalProjectImage"
                />
              </div>
              <div className="modalInfoColumn">
                <h2 className="modalProjectTitle">{selectedProject.title}</h2>
                <p className="projectDescription">
                  {selectedProject.description}
                </p>
                <div className="techStack">
                  <h4 className="techStackTitle">Technologies Used:</h4>
                  <div className="techTags">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="techTag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {(selectedProject.liveUrl || selectedProject.githubUrl) && (
  <div className="projectLinks">
    {selectedProject.liveUrl && (
      <a
        href={selectedProject.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="liveDemoBtn"
      >
        <FiExternalLink style={{ marginRight: '8px' }} />
        Live Demo
      </a>
    )}
    {selectedProject.githubUrl && (
      <a
        href={selectedProject.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="githubBtn"
      >
        <FaGithub style={{ marginRight: '8px' }} />
        View Code
      </a>
    )}
  </div>
)}

              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Works;
