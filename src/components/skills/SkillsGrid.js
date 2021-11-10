import React from 'react';


export const SkillsGrid = ({ title, skills }) => {
    return (
        <>
            <h3 className='skills-title'>{title}</h3>
            <div className='skills-grid'>
                {skills.map(skill => 
                <div className='skills-item'>
                    <p className='skills-item-name'>{skill['name']}</p>
                    {skill['icon']}
                </div>)}
            </div>
        </>
    );
};
