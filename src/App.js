import './App.css';
import React from 'react';
import axios from 'axios';


class App extends React.Component {
  state = { advice: '' };
 // use componentDidMount life-circle method to fetch.
  componentDidMount(){
      console.log("Hi")
  }
  render() {
  return (
    <div className="App">
      <h1>App</h1>
    </div>
  );
}

}
export default App;
