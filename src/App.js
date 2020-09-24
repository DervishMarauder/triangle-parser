import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import FileUpload from './components/FileUpload/FileUpload';
import Loader from './components/Loader/Loader';
import ParsedResultDisplay from './components/ParsedResultDisplay/ParsedResultDisplay';

import { ParseTriangleResultFromFile } from './utils/TriangleParsingService';

import './App.scss';

function App() {

  const [parsedResult, setParsedResult] = useState();

  const [loading, setLoading] = useState(false);

  const clearParsedResult = () => {
    setParsedResult(null);
  }

  const parseTextFile = (file) => {

    // Display loader while parsing file.
    setLoading(true);
    clearParsedResult();

    const onComplete = (result) => {
      setParsedResult(result); 
      setLoading(false);
    } 

    const onError = () => {
      // If an error occurs, display the upload page.
      // TODO: Add error message to upload page if we get here.
      setLoading(false);
    }

    ParseTriangleResultFromFile(file, onComplete, onError);

  }

  const currentPage = () => {

    // Processing information, hide all other components and show a spinner until finished.
    if (loading === true) {
      return <Loader />
    }

    // A result is present, display the results to the user.
    if (parsedResult) {
      return <ParsedResultDisplay parsedResult={parsedResult} clearParsedResult={clearParsedResult} />
    }

    // Default state, allow user to submit a file to be parsed.
    return <FileUpload parseTextFile={parseTextFile} />

  }

  return (
    <div className="app-background d-flex align-items-center">
      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 2 }} md={{ span: 10, offset: 1 }}>
            <div className="app-content p-4">
              { currentPage() }
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );

}

export default App;