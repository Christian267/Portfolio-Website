import React, { useState } from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

export const Resume = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div className='resume-container'>
            <Document
                file="resume.pdf"
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page 
                    className='page'
                    pageNumber={pageNumber}
                      height={1000}
                />
            </Document>
        </div>
    )
}
