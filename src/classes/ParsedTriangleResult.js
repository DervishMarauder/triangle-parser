export class ParsedTriangleResult {
    constructor(lines) {       
        // TODO: Validate that lines is an array of ParsedTriangleLines.
        this.lines = lines;
    }

    // Filter valid lines and reduce to find highest value for overall result. 
    getMaximumTotal() {      
        // Using class functions to make code more readable.
        return this.lines.filter((line) => line.isValid())
                         .map((line) => line.getHighestValue())
                         .reduce((acc, val) => acc + val, 0);
    }

    getValidLineCount() {
        return this.lines.filter((line) => line.isValid()).length;
    }

    getLineCount() {
        return this.lines.length;
    }
}