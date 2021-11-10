import { React } from 'react';
import { FaAws, FaDocker, FaGithub, FaJava, FaPython, FaReact } from 'react-icons/fa';
import { SiCss3, SiFlask, SiJavascript, SiMongodb, SiPostgresql, SiSpring } from 'react-icons/si';
import { TiHtml5 } from 'react-icons/ti';

export const SkillsData = [];


const backendIcons = [
    {
        icon: <FaPython />,
        name: 'Python'
    },
    {
        icon: <FaJava />,
        name: 'Java'
    },
    {
        icon: <SiFlask />,
        name: 'Flask'
    },
    {
        icon: <SiSpring />,
        name: 'Spring'
    },
    {
        icon: <SiPostgresql />,
        name: 'PostgreSQL'
    },
    {
        icon: <SiMongodb />,
        name: 'MongoDB'
    },
];

SkillsData.push({
    title: 'Backend',
    skills: backendIcons
});


const frontendIcons = [
    {
        icon: <SiJavascript />,
        name: 'JavaScript'
    },
    {
        icon: <FaReact />,
        name: 'React'
    },
    {
        icon: <TiHtml5 />,
        name: 'HTML'
    },
    {
        icon: <SiCss3 />,
        name: 'CSS'
    }
];

SkillsData.push ({
    title: 'Frontend',
    skills: frontendIcons
});


const deploymentIcons = [
    {
        icon: <FaDocker />,
        name: 'Docker'
    },
    {
        icon: <FaAws />,
        name: 'AWS'
    },
    {
        icon: <FaGithub />,
        name: 'Github'
    }
];

SkillsData.push ({
    title: 'Deployment',
    skills: deploymentIcons
});