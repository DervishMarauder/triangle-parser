import { ParsedTriangleResult } from '../classes/ParsedTriangleResult';
import { ParsedTriangleLine } from '../classes/ParsedTriangleLine';

export function ParseTriangleResultFromFile(file, onComplete, onError) {

    // TODO: Add error checking for file and onComplete.

    // Set default value for onError if left empty.
    onError = onError || (() => {});

    // Declare new FileReader instance to process text file.
    const reader = new FileReader();

    reader.onload = (event) => {

        const loadedFile = event.target.result;

        // TODO: Replace with logic to read line by line. 
        //       Current implementation pulls all file data into local memory and wouldn't support larger files.
        const allStringLines = loadedFile.split(/\r\n|\n/);

        // Pass line strings into ParsedTriangleLine constructors.
        const parsedTriangleLines = allStringLines.map((line) => new ParsedTriangleLine(line));

        // Fire callback with result object.
        onComplete(new ParsedTriangleResult(parsedTriangleLines));

    };

    reader.onerror = onError;

    reader.readAsText(file);

} 