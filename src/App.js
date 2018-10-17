import React, { Component } from 'react';
import './App.css';
import Buttons from './Buttons';


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      disabled: false,
      paired: false,
      text: {
        firstWord: 'two',
        secondWord: 'six',
        thirdWord: 'four',
        fourthWord: 'one',
        fifthWord: 'three'
      },
      digits: {
        firstNumber: 2,
        secondNumber: 6,
        thirdNumber: 4,
        fourthNumber: 1,
        fifthNumber: 3
      },
    };


  }

  handleDisabledButton = (e) => {
    var disabled = e.target.value;
    console.log(disabled)
    this.setState({
      disabled: true
    });
  };



  onClickMatchNumbers = (e) => {
    /*  const txts = this.state.text;
     const nums = this.state.digits;
 
     for (var word of txts) {
       for (var number of nums) {
         if (txts.indexOf[word] === nums.indexOf[number]) {
           return true
         }
       } */
    if (this.state.paired === false) {
      this.setState({
        paired: true
      });
    }
    else {
      this.setState({
        paired: false
      });
    }
  };



  render() {

    return (

      < div className="App" >
        <header className="App-header">
          <div className="match-quiz">
            <h2>Match the words to the numbers</h2>
            <h4>Click the word and then the number. Match all the pairs to continue.</h4>
            <div className="wordslist1">
              {
                <Buttons
                  className={"paired"}
                  type="submit"
                  data={['Two', 'Six', 'Four', 'One', 'Three']}
                  onClick={() => this.onClickMatchNumbers()}
                  disabled={() => this.handleDisabledButton()}
                />
              }
            </div>
            <div className="wordslist2">
              <Buttons
                type="submit"
                data={[2, 6, 4, 1, 3]}
                onClick={() => this.onClickMatchNumbers()}
                disabled={this.handleDisabledButton}
              />

            </div>
            <div className="response">
            </div>
          </div>
        </header>
      </div >
    );
  }

}

export default App;
