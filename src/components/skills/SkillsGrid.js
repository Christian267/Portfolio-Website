import React from 'react';
import { SkillsData } from './SkillsData.js'
import { FaPython } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';


export const SkillsGrid = ({ title, icons }) => {
    console.log(icons);
    console.log(FaPython);
    return (
        <>
            <h3 className='skills-title'>{title}</h3>
            <div className='skills-grid'>
                {icons.map(icon => <div className='skills-item'>{icon}</div>)}
            </div>
        </>
    );
};
