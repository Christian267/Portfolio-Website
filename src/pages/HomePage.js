import { React, useState } from 'react';
import { Contact } from '../components/contact/Contact';
import { Header } from '../components/header/Header';
import { Navbar } from '../components/Navbar/Navbar';
import { Projects } from '../components/projects/Projects';
import { Skills } from '../components/skills/Skills';
import { Topbar } from '../components/topbar/Topbar';


export const HomePage = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };


    return (
        <div>    
            <Topbar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <div className='sections'>
                <Header  />
                <Projects />
                <Skills />
                <Contact />
            </div>
        </div>
    );

};