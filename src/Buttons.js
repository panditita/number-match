import React, { Component } from 'react';
import './button.css';



class Buttons extends Component {


    render() {
        const dataToMatch = this.props.data
        const disabledButton = this.props.disabled
        return <div>
            {
                dataToMatch.map((i) => {
                    return <button className='button' data={i} disabled={disabledButton}>{i}</button>
                })
            }
        </div>
    }
};
export default Buttons;

