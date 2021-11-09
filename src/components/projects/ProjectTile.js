import React from 'react';

export const ProjectTile = ({ title, description, buttonText, image, hoverImage, link}) => {
    return (
        <div className='project-tile'>
            <div className='text'>
                <h3>{title}</h3>
                <p>{description}</p>
                <a href={link}><button>{buttonText}</button></a>
            </div>
            <div className='img-container'>
                <img src={image} alt='Project' className='primary-image'/>
                <img src={hoverImage} alt='alt' className='alt-image'/>
            </div>
        </div>
    );
};
