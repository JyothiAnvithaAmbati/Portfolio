import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Projects.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';



const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {

axios.get('http://localhost:8000/api/projects/')
      .then(response => setProjects(response.data))
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

  return (
    <section id="projects">
      <h2>Projects</h2>
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.github_link} target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faGithub} size="2x" />
            
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
