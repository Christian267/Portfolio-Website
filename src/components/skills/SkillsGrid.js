import React from 'react';


export const SkillsGrid = ({ title, skills }) => {
    const gridLength = skills.length;
    console.log(title + gridLength);
    return (
        <>
            <h3 className='skills-title'>{title}</h3>
            <div className='skills-grid'>
                {skills.map((skill, index) => 
                <div className={
                    (index + 4 >= gridLength) && (gridLength <= 4 || index >= 4) ?
                    'skills-item skills-item-bottomless' : 
                    'skills-item'
                }>
                    <p className='skills-item-name'>{skill['name']}</p>
                    {skill['icon']}
                </div>)}
            </div>
        </>
    );
};
