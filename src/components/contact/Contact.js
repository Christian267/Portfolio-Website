import React, { useState } from 'react';
import './Contact.scss'

export const Contact = () => {
    const [message, setMessage] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
    }

    return (
        <div className='contact-section'>
            <div className='contact' id='contact'>
                <h1>Contact Me</h1>
                <h3>Christian Benitez</h3>
                <p>Christian.Benitez2797@gmail.com</p>
                <div className='info'>
                    <div className='info-group'>
                        <a href='#header'>About Me</a>
                        <a href='#projects'>Projects</a>
                        <a href='#skills'>Skills</a>
                    </div>
                    <div className='info-group'>
                        <a href='https://github.com/christian267'>Github</a>
                    </div>
                </div>
            </div>
        </div>
    );
};
