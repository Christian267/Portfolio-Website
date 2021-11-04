import { React, useState } from 'react';
import { Header } from '../components/header/Header';
import { Navbar } from '../components/Navbar/Navbar';
import { Topbar } from '../components/topbar/Topbar';


export const HomePage = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        console.log(isOpen);
        setIsOpen(!isOpen);
    };

    return (
        <div>    
            <Topbar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <Header />
        </div>
    );

};