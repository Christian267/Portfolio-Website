import React from 'react';
import './Header.scss';
import portrait from './portrait3.JPG';
import { FaGithub } from 'react-icons/fa';

export const Header = () => {
    return (
        <div className='header' id='header'>
            <div className='header-grid'>
                <div className='photo'>
                    <img src={portrait} alt='Christian'/>
                </div>
                <div className='intro'><h1>Hi, my name is Christian Benitez.</h1></div>
                <div className='description'><p>I am a self taught software engineer, focusing on web development.</p></div>
            </div>
            <span><h5>Christian.benitez2797@gmail.com<a href='https://github.com/christian267'><FaGithub className='icon'/></a></h5></span>
        </div>
    );
};
