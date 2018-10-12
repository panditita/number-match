import React, { Component } from 'react';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="match-quiz">
            <h2>Match the words to the numbers</h2>
            <h4>Click the word and then the number. Match all the pairs to continue.</h4>
            <div className="wordslist1">
              <button type="button" className="btn btn-primary">Two</button>
              <button type="button" className="btn btn-primary">Six</button>
              <button type="button" className="btn btn-primary">Four</button>
              <button type="button" className="btn btn-primary">One</button>
              <button type="button" className="btn btn-primary matched">Three</button>
            </div>
            <div className="wordslist2">
              <button type="button" className="btn btn-primary matched">3</button>
              <button type="button" className="btn btn-primary">4</button>
              <button type="button" className="btn btn-primary">2</button>
              <button type="button" className="btn btn-primary">5</button>
              <button type="button" className="btn btn-primary">1</button>
            </div>
            <div className="response">
              {alert("Correct")}
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
