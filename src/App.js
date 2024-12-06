import './App.css';
import React, {Component} from 'react';
import GifSearch from './components/GifSearch/GifSearch'
import GifList from './components/GifList/GifList';

class App extends Component{

  state = {
    inputValue: ""
  }

  getSearching = (valueInput) => {
    console.log(valueInput);
    
    this.setState({inputValue: valueInput})
  }
  
  render() {
    
    // console.log(this.state.inputValue);
    return (
      <>
        <GifSearch getValue={this.getSearching}/>
        <GifList searchingValue={this.state.inputValue}/>
      </>
    );
  }
}

export default App;