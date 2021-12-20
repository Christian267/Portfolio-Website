import { React } from 'react';
import { FaAws, FaDocker, FaGitAlt, FaGithub, FaJava, FaPython, FaReact } from 'react-icons/fa';
import { SiCss3, SiFlask, SiHtml5, SiJavascript, SiMongodb, SiPostgresql, SiSpring } from 'react-icons/si';

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
        icon: <SiHtml5 />,
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


const generalIcons = [
    {
        icon: <FaDocker />,
        name: 'Docker'
    },
    {
        icon: <FaAws />,
        name: 'AWS'
    },
    {
        icon: <FaGitAlt />,
        name: 'Git'
    },
    {
        icon: <FaGithub />,
        name: 'Github'
    }
];

SkillsData.push ({
    title: 'Deployment and Version Control',
    skills: generalIcons
});