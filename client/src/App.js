import React, { Component } from 'react';
import './App.css';
import TimeDisplay from './components/TimeDisplay';
import Splits from './components/Splits';

class App extends Component {
  constructor(props) {
    super(props)
      this.state = {
        elapsed: 0,
        splits: [],
        lastClearedIncrememter: null
    }
    this.incrementer = null;
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.logTimeSplit = this.logTimeSplit.bind(this);
    this.formattedTime = this.formattedTime.bind(this);
  }

  startTimer() {
    this.incrementer = setInterval(() =>
      this.setState({
        elapsed: this.state.elapsed + 1
      }), 1000);
  }

  stopTimer() {
    clearInterval(this.incrementer);
    this.setState({
      lastClearedIncrememter: this.incrementer
    });
  }

  resetTimer() {
    clearInterval(this.incrementer);
    this.setState({
      elapsed: 0,
      splits: [] 
    })
  }

  logTimeSplit() {
    // console.log('log the split');
    const time = this.state.elapsed;
    this.setState({
      splits: this.state.splits.concat([time])
    })
  }

  formattedTime(elapsed) {
    return Math.floor(elapsed / 60) + ':' + ('0' + elapsed % 60).slice(-2)
  }

  render() {
    return (
      <div className="App">
        <h1>Stopwatch</h1>
        <TimeDisplay 
        elapsed={this.state.elapsed} 
        lastClearedIncrememter={this.state.lastClearedIncrememter}
        incrementer={this.incrementer}
        startTimer={this.startTimer}
        stopTimer={this.stopTimer} 
        resetTimer={this.resetTimer}
        logTimeSplit={this.logTimeSplit}
        formattedTime={this.formattedTime(this.state.elapsed)}/>
        <Splits 
        splits={this.state.splits}
        formattedTime={this.formattedTime}/>
      </div>
    );
  }
}

export default App;
