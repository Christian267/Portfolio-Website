import React from 'react';
import './Header.scss';
import linus from './linus.jpg';
export const Header = () => {
    return (
        <div className='header' id='header'>
            <div className='photo'>
                <img src={linus} alt='Christian'/>
            </div>
            <div className='intro'><h1>Hello, my name is Christian Benitez.</h1></div>
            <div className='description'><p>I am an aspiring software engineer, specializing in backend web development.</p></div>
            <div className='links'>links</div>
        </div>
    );
};
