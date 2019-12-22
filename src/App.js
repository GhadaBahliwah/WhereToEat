import React, {Component} from 'react';
import './css/style.css';
import SuggestBtn from './components/suggestBtn';

class App extends Component {
  render(){
    return (
      <div className="App">
        <SuggestBtn/>
      </div>
    );
  }
}

export default App;
