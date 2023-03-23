import React, { useState } from 'react';

function Projects () {
  const [projects] = useState([
    {
      id: 1,
      name: 'Project 1',
      description: 'This is project 1',
      deployedLink: 'https://google.com',
      githubLink: 'https://github.com',
      image: 'https://picsum.photos/1280/960?random=1',
    },
    {
      id: 2,
      name: 'Project 2',
      description: 'This is project 2',
      deployedLink: 'https://google.com',
      githubLink: 'https://github.com',
      image: 'https://picsum.photos/1280/960?random=2&nocache=1',
    },
    {
      id: 3,
      name: 'Project 3',
      description: 'This is project 3',
      deployedLink: 'https://google.com',
      githubLink: 'https://github.com',
      image: 'https://picsum.photos/1280/960?random=3&nocache=1',
    },
    {
      id: 4,
      name: 'Project 4',
      description: 'This is project 4',
      deployedLink: 'https://google.com',
      githubLink: 'https://github.com',
      image: 'https://picsum.photos/1280/960?random=4&nocache=1',
    },
    {
      id: 5,
      name: 'Project 5',
      description: 'This is project 5',
      deployedLink: 'https://google.com',
      githubLink: 'https://github.com',
      image: 'https://picsum.photos/1280/960?random=5&nocache=1',
    },
    {
      id: 6,
      name: 'Project 6',
      description: 'This is project 6',
      deployedLink: 'https://google.com',
      githubLink: 'https://github.com',
      image: 'https://picsum.photos/1280/960?random=6&nocache=1',
    },
  ]);

  return (
    <div className="flex flex-col justify-center items-center z-0">
      <h2 className="text-4xl lg:text-5xl font-bold mb-5">Projects</h2>
      <div className="flex flex-row flex-wrap justify-center items-center">
        {projects.map((project) => (
          <div key={project.id} className="relative m-4 w-1/3 text-white group">
            <div className='opacity-100 group-hover:opacity-25 transition-opacity duration-500 ease-in-out'>
              <img src={project.image} alt={project.name} className='border-transparent rounded-lg'/>
            </div>
            <div className="projectText absolute top-0 left-0 px-16 z-10 w-full h-full flex flex-col justify-center items-center group transition-opacity duration-500 ease-in-out">
              <div className='w-full flex flex-row justify-start'>
                <a href={project.deployedLink} className='col-start-2 col-span-3 self-center opacity-0 group-hover:opacity-25 hover/edit:opacity-100'target='_blank' rel='noopener noreferrer'>
                  <h3 className="text-3xl font-bold">{project.name}</h3>
                </a>
                <a href={project.githubLink} className='col-start-5 pl-5 opacity-0 group-hover:opacity-25 hover:opacity-100' target='_blank' rel='noopener noreferrer'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="24px"
                    width="48px"
                    height="48px"
                    viewBox="0,0,256,256"
                  >
                    <g
                      fill="#fff"
                      fill-rule="nonzero"
                      stroke="none"
                      stroke-width="1"
                      stroke-linecap="butt"
                      stroke-linejoin="miter"
                      stroke-miterlimit="10"
                      stroke-dasharray=""
                      stroke-dashoffset="0"
                      font-family="none"
                      font-weight="none"
                      font-size="none"
                      text-anchor="none"
                      
                    >
                      <g transform="scale(10.66667,10.66667)">
                        <path d="M10.9,2.1c-4.6,0.5 -8.3,4.2 -8.8,8.7c-0.5,4.7 2.2,8.9 6.3,10.5c0.3,0.1 0.6,-0.1 0.6,-0.5v-1.6c0,0 -0.4,0.1 -0.9,0.1c-1.4,0 -2,-1.2 -2.1,-1.9c-0.1,-0.4 -0.3,-0.7 -0.6,-1c-0.3,-0.1 -0.4,-0.1 -0.4,-0.2c0,-0.2 0.3,-0.2 0.4,-0.2c0.6,0 1.1,0.7 1.3,1c0.5,0.8 1.1,1 1.4,1c0.4,0 0.7,-0.1 0.9,-0.2c0.1,-0.7 0.4,-1.4 1,-1.8c-2.3,-0.5 -4,-1.8 -4,-4c0,-1.1 0.5,-2.2 1.2,-3c-0.1,-0.2 -0.2,-0.7 -0.2,-1.4c0,-0.4 0,-1 0.3,-1.6c0,0 1.4,0 2.8,1.3c0.5,-0.2 1.2,-0.3 1.9,-0.3c0.7,0 1.4,0.1 2,0.3c1.3,-1.3 2.8,-1.3 2.8,-1.3c0.2,0.6 0.2,1.2 0.2,1.6c0,0.8 -0.1,1.2 -0.2,1.4c0.7,0.8 1.2,1.8 1.2,3c0,2.2 -1.7,3.5 -4,4c0.6,0.5 1,1.4 1,2.3v2.6c0,0.3 0.3,0.6 0.7,0.5c3.7,-1.5 6.3,-5.1 6.3,-9.3c0,-6 -5.1,-10.7 -11.1,-10z"></path>
                      </g>
                    </g>
                  </svg>
                </a>
              </div>
              <p className="w-full row-start-2 col-start-2 col-span-5 flex justify-start group-hover:opacity-100 opacity-0">{project.description}</p>
            </div>
          </div>        
        ))}
      </div>
    </div>
  );
}

export default Projects;
