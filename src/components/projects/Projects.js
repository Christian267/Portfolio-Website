import React from 'react';
import './Projects.scss';
import pathfindingPrimary from './pathfindingPrimary.gif';
import pathfindingSecondary from './pathfinding-gif.gif';
import { ProjectTile } from './projectTile/ProjectTile';

export const Projects = () => {

    const pathfindingProps = {
        image: pathfindingPrimary,
        altImage: pathfindingSecondary,
        title: 'Pathfinding Visualization',
        description: 'Visualize multiple pathfinding algorithms using an interactive grid.',
        link: 'https://christian267.github.io/Pathfinding-Visualization/'
    };

    const chessAppProps = {
        image: pathfindingPrimary,
        altImage: pathfindingSecondary,
        title: 'Chess Web Application',
        description: 'Backend focused app which allows users to play chess together.',
        link: 'http://chessapplication4-env.eba-u7exvhmc.us-east-2.elasticbeanstalk.com/'
    };

    const qolProps = {
        image: pathfindingPrimary,
        altImage: pathfindingSecondary,
        title: 'City Quality of Life Dashboard',
        description: 'I worked on this project super duper hard',
        link: ''
    };

    const faceRecProps = {
        image: pathfindingPrimary,
        altImage: pathfindingSecondary,
        title: 'Face Recognition App',
        description: 'I worked on this project super duper hard',
        link: ''
    }

    const mouseKeyboardProps = {
        image: pathfindingPrimary,
        altImage: pathfindingSecondary,
        title: 'Mouse and Keyboard Automation GUI',
        description: 'I worked on this project super duper hard',
        link: ''
    };



    return (
        <div className='projects' id='projects'>
            <h2 className='project-title'>My Projects</h2>
            <div className='tile-container'>
                <ProjectTile {...pathfindingProps} />
                <ProjectTile {...chessAppProps} />
                <ProjectTile {...qolProps} />
                <ProjectTile {...faceRecProps} />
                <ProjectTile {...mouseKeyboardProps} />
            </div>
        </div>
    );
};
