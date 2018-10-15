import React, { Component } from 'react';
import './App.css';

var button = {
  margin: '10px 10px 10px 0',
  backgroundColor: 'grey',
  width: '70px',
  height: '35px',
  fontSize: '20px'
};


class NumbersToMatch extends Component {
  render() {
    return <div>{this.props.data}</div>
  }
}


class Buttons extends Component {
  render() {

    return <div>
      {
        this.props.data.map((i) => {
          return <button style={button}> {<NumbersToMatch key={i} data={i} />} </button>
        })
      }

    </div>
  }
};

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="match-quiz">
            <h2>Match the words to the numbers</h2>
            <h4>Click the word and then the number. Match all the pairs to continue.</h4>
            <div className="wordslist1">
              <Buttons data={['Two', 'Six', 'Four', 'One', 'Three']} />
            </div>
            <div className="wordslist2">
              <Buttons data={[2, 6, 4, 1, 3]} style={button} />
            </div>
            <div className="response">
              {alert("Correct")}
            </div>
          </div>
        </header>
      </div >
    );
  }
}

export default App;
