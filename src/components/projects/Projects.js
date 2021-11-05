import React from 'react';
import './Projects.scss';
import projectImg from './project-img.png';
export const Projects = () => {
    return (
        <div className='projects' id='projects'>
            <h2 className='project-title'>My Projects</h2>
            <div className='project-tile'>
                <div className='description'><h3>This is my project description. I worked super duper hard on this</h3></div>
                <div className='img-container'>
                    <img src={projectImg} alt='Project Image'/>
                </div>
            </div>
            <div className='project-tile'>
                <div className='description'><h3>This is my project description. I worked super duper hard on this</h3></div>
                <div className='img-container'>
                    <img src={projectImg} alt='Project Image'/></div>
            </div>
            <div className='project-tile'>
                <div className='description'><h3>This is my project description. I worked super duper hard on this</h3></div>
                <div className='img-container'>
                    <img src={projectImg} alt='Project Image'/></div>
            </div>
            <div className='project-tile'>
                <div className='description'><h3>This is my project description. I worked super duper hard on this</h3></div>
                <div className='img-container'>
                    <img src={projectImg} alt='Project Image'/></div>
            </div>
        </div>
    );
};
