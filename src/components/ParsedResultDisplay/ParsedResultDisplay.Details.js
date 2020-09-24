import React from 'react';

import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';

export default function ParsedResultDisplayDetails({ parsedResult }) {

    const lineRow = (line, index) => {

        const lineNumber = index + 1;
        const highestValue = line.getHighestValue();

        return (
            <tr key={lineNumber}>
                <td>{lineNumber}</td>
                <td>{numberList(line.numbers, highestValue)}</td>
            </tr>
        )

    }

    const numberList = (numbers, highestValue) => {

        if (0 >= numbers.length) {
            return <span className="text-muted">None</span>
        }

        // Index is being used for the key prop. This isn't recommended but no explicit key is available.
        return numbers.map((number, index) => (<Badge key={index} pill variant={(number === highestValue ? "danger" : "light")}>{number}</Badge>))

    }

    return (
        <Table striped hover borderless size="sm">
            <tbody>
                { parsedResult.lines.map(lineRow) }
            </tbody>
        </Table>
    )

} 