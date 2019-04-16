import React, { Component } from 'react';
import participants from './participants';
import ParticipantList from './participant-list';
import './App.css';


class App extends Component {
  render() {
    return (
      /* <React.Fragment> */
      <div className="App-"> 
        <ParticipantList participants = {participants} />
        {/* <Stage store= {participants} /> */}
      </div>
    );
  }
}

export default App;
