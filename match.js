import React, { Component } from 'react';


class Match extends Component {

    render() {
        match = (text, digits) => {
            for (var word of text) {
                for (var number of digits) {
                    if (text.indexOf[word] === digits.indexOf[number])
                        return true
                }
                return false
            }
        }
    }
}


export default Match;
