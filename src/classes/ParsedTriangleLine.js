export class ParsedTriangleLine {
    constructor(lineString) {    
        this.numbers = [];

        // If string is empty, leave numbers as empty array;
        if (!lineString) {
            return;
        }

        // Process the string in values that can be sorted easily.
        // 1. Split the string into individual values.
        // 2. Try parse string list into int list.
        // 3. Remove any values that failed to parse.
        this.numbers = lineString.split(" ")
                                 .map((value) => parseInt(value))
                                 .filter((value) => isNaN(value) === false);
    }

    isValid() {
        // Line is only valid if we have at least 1 number.
        return this.numbers.length > 0;
    }

    getHighestValue() {
        // TODO: Move to generic function in Math utils file.
        return Math.max.apply(null, this.numbers);
    } 
}