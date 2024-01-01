import React from 'react';
import ResumePDF from '../assets/Resume.pdf'
import '../css/Resume.css'

export const Resume = () => {
    return (
        <div className='ResumePDF'>
            <h1>Resume</h1>
            <iframe src={ResumePDF} allow="autoplay"/>
        </div>
    );
}
