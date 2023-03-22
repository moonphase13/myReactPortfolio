import React, { useState } from 'react';

function Projects() {
  const [projects] = useState([
    {
      name: 'Project 1',
      description: 'This is project 1',
      deployedLink: 'google.com',
      githubLink: 'github.com',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Project 2',
      description: 'This is project 2',
      deployedLink: 'google.com',
      githubLink: 'github.com',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Project 3',
      description: 'This is project 3',
      deployedLink: 'google.com',
      githubLink: 'github.com',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Project 4',
      description: 'This is project 4',
      deployedLink: 'google.com',
      githubLink: 'github.com',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Project 5',
      description: 'This is project 5',
      deployedLink: 'google.com',
      githubLink: 'github.com',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Project 6',
      description: 'This is project 6',
      deployedLink: 'google.com',
      githubLink: 'github.com',
      image: 'https://via.placeholder.com/150',
    },
  ]);
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold">Projects</h1>
      <div className="flex flex-row flex-wrap justify-center items-center">
        {projects.map((project) => (
          <div className="flex flex-col justify-center items-center m-4">
            <img src={project.image} alt={project.name} />
            <h2 className="text-2xl font-bold">{project.name}</h2>
            <p className="p-10">{project.description}</p>
            <a href={project.deployedLink}>Deployed Link</a>
            <a href={project.githubLink}>Github Link</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
