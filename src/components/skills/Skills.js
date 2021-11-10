import React from 'react';
import './Skills.scss';
import { SkillsData } from './SkillsData';
import { SkillsGrid } from './SkillsGrid';

export const Skills = () => {
    return (
        <div className='skills' id='skills'>
            <h2 className='section-title'>Skills</h2>
            {SkillsData.map(skillsData => <SkillsGrid {...skillsData}/>)}
        </div>
    );
};
