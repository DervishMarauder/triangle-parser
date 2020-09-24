import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Arrow90degRight } from 'react-bootstrap-icons';

import { HasValidMimetype } from '../../utils/FileValidation';

import './FileUpload.scss';

// Declared to keep Form.File and Mimetype validation consistent
const ValidMimetype = "text/plain";

export default function FileUpload({ parseTextFile }) {

    const [validationError, setValidationError] = useState("");

    const fileInput = React.createRef()

    const handleFileSelected = () => {

        // Clear error message to reset form.
        setValidationError("");

        // Check that fileInput contains a file.
        if (!fileInput.current.files) {
            setValidationError("No file selected for import.");
            return;
        }

        // Declare variable for file object.
        const file = fileInput.current.files[0];

        // Check that file is of correct type for parsing process.
        if (!HasValidMimetype(file, ValidMimetype)) {
            setValidationError("File type is invalid. Please select a .txt file.");
            return;
        }

        // File is valid for import. Begin parsing process.
        parseTextFile(file);

    }

    return (
        <Form>
            <div className="mb-5">
                <h1 className="text-center">
                    Import your triangle <Arrow90degRight className="header-arrow-icon" />
                </h1>
            </div>

            <Form.File 
                label="Choose a .txt file"
                onChange={handleFileSelected}
                ref={fileInput}
                accept={ValidMimetype}
                isInvalid={!!validationError}
                feedback={validationError}
                custom
            />
        </Form>
    )

} 