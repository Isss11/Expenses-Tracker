import '../index.css';
import React from 'react';

// creating div to hold all expenses elements
class Expenses extends React.Component {
    constructor(props) {
        super(props);
        this.state = { // will hold array of all 
            // will need to lift the state of these up in a little bit
            allExpenses : [],
            totalExpenses : 0
        }
    }

    // calculate total expenses function

    // remove an expenses function (will need keys) -- TO DO LATER

    // add a an expense function

    render () {
        return (
            <div>
            This is where the expenses should be.
            </div>
        )
    };
}

export default Expenses;