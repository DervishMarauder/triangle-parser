import React, { useState } from 'react';

import ParsedResultDisplayDetails from './ParsedResultDisplay.Details';

import './ParsedResultDisplay.scss';

export default function ParsedResultDisplay({ parsedResult, clearParsedResult }) {

    const [displayDetails, setDisplayDetails] = useState(false);

    const detailRow = (title, value) => (
        <>
            <dt className="col-sm-6 text-right">{title}:</dt>
            <dd className="col-sm-6 text-left">{value}</dd>
        </>
    )

    return (
        <div className="text-center">
            <div>
                <div className="mb-3">
                    <h1> Result</h1>
                </div>    
                <dl className="row">
                    { detailRow("Maximum total", parsedResult.maximumTotal) }
                </dl>
            </div>
            <div>
                <button 
                    type="button" 
                    onClick={clearParsedResult} 
                    className="btn btn-outline-primary mr-1"
                    >
                        Reset
                </button>
                <button 
                    type="button" 
                    onClick={() => { setDisplayDetails(!displayDetails); }}
                    className="btn btn-outline-primary ml-1"
                    >
                        {(displayDetails ? "Hide" : "Show")} details
                </button>
            </div>
            { 
                displayDetails && 
                <div className="mt-4">
                    <ParsedResultDisplayDetails parsedResult={parsedResult} />
                </div>
            }
        </div>
    )

} 