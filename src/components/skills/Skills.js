import React from 'react';
import './Skills.scss';
import { SkillsData } from './SkillsData';
import { SkillsGrid } from './SkillsGrid';

export const Skills = () => {
    return (
        <div className='skills' id='skills'>
            <h2 className='section-title'>Skills</h2>
            {SkillsData.map(skillsData => <SkillsGrid {...skillsData}/>)}
            <h3 className='skills-title'>Languages</h3>
            <div className='skills-grid'>
                {[0,0,0,0,0,0,0,0].map(() => <div className='skills-item'></div>)}
            </div>
            <h3 className='skills-title'>Frameworks</h3>
            <div className='skills-grid'>
                {[0,0,0,0,0,0,0,0].map(() => <div className='skills-item'></div>)}
            </div>
            <h3 className='skills-title'>General</h3>
            <div className='skills-grid'>
                {[0,0,0,0,0,0,0,0].map(() => <div className='skills-item'></div>)}
            </div>
        </div>
    );
};
