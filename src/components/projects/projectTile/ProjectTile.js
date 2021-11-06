import React from 'react';

export const ProjectTile = ({image, altImage, title, description, link}) => {
    return (
        <div className='project-tile'>
            <div className='text'>
                <h3>{title}</h3>
                <p>{description}</p>
                <a href={link}><button>View Project</button></a>
            </div>
            <div className='img-container'>
                <img src={image} alt='Project' className='primary-image'/>
                <img src={altImage} className='alt-image'/>
            </div>
        </div>
    );
};
