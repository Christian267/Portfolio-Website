import React, { useState, useEffect } from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

export const Resume = () => {
    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 768px)").matches
    )
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    useEffect(() => {
        window.matchMedia("(min-width: 768px)")
        .addEventListener('change', e => setMatches( e.matches));
    }, []);
    
    return (
        <div className='resume-container'>
            <Document
                file="resume.pdf"
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page 
                    className='page'
                    pageNumber={pageNumber}
                      height={matches ? 1000: 635}
                />
            </Document>
        </div>
    )
}
