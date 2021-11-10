import { React } from 'react';
import { FaPython } from 'react-icons/fa';
import { FaJava } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { TiHtml5 } from 'react-icons/ti';
import { SiCss3 } from 'react-icons/si';
export const SkillsData = [];


const languageIcons = [];
languageIcons.push(<FaPython />);
languageIcons.push(<FaJava />);
languageIcons.push(<SiJavascript />);
languageIcons.push(<TiHtml5 />);
languageIcons.push(<SiCss3 />);

SkillsData.push ({
    title: 'Languages',
    icons: languageIcons,
});

SkillsData.push ({
    title: 'Frameworks',
    icons: languageIcons,
})

SkillsData.push ({
    title: 'General',
    icons: languageIcons,
})