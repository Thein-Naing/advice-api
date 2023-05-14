import './App.css';
import React from 'react';
import axios from 'axios';


class App extends React.Component {
  state = { advice: '' };
 // use componentDidMount life-circle method to fetch.
  componentDidMount(){

    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const {advice} = response.data.slip;
          // console.log(advice);
          this.setState({advice}) // call state with this to fecth {advice}
      })
      .catch((error)=> {
        console.log(error);
      });
  }

   fetch
  render() {
  return (
    <div className="App">
      <h1>App</h1>
    </div>
  );
}

}
export default App;
