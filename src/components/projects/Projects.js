import React from 'react';
import './Projects.scss';
import { ProjectTile } from './ProjectTile';
import { projectData } from './ProjectData';
export const Projects = () => {

    return (
        <div className='projects' id='projects'>
            <h2 className='project-title'>Projects</h2>
            <div className='tile-container'>
                {projectData.map(project => <ProjectTile {...project}/>)}
            </div>
        </div>
    );
};
