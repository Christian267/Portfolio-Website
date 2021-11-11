import React from 'react';
import './Header.scss';
import linus from './linus.jpg';
import { FaGithub } from 'react-icons/fa';

export const Header = () => {
    return (
        <div className='header' id='header'>
            <div className='header-grid'>
                <div className='photo'>
                    <img src={linus} alt='Christian'/>
                </div>
                <div className='intro'><h1>Hello, my name is Christian Benitez.</h1></div>
                <div className='description'><p>I am an aspiring software engineer, specializing in backend web development.</p></div>
            </div>
            <span><h5>Christian.benitez2797@gmail.com<a href='https://github.com/christian267'><FaGithub className='icon'/></a></h5></span>
        </div>
    );
};
