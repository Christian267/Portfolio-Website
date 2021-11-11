import React from 'react';
import './Contact.scss'

export const Contact = () => {
    return (
        <div className='contact-section'>
            <div className='contact' id='contact'>
                <h1>Email Me</h1>
                <div className='contact-form-container'>
                    <form>
                        <input type='text' placeholder='Email'/>
                        <textarea placeholder='Message'></textarea>
                        <button type='submit'>Send</button>
                    </form>
                </div>
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
