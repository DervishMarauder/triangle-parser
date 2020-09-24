import React from 'react';
import { Spinner } from 'react-bootstrap';

import './Loader.scss';

export default function Loader() {

    return (
        <div className="text-center">
            <Spinner 
                className="spinner-lg"
                animation="border" 
            />
        </div>
    )

} 