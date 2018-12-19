import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }
    render(){
   return (
        <div>
            <h1>Hello world</h1>
            <h2>it's {this.state.date.toLocaleTimeString()}.</h2> // Create date
        </div>

        <div>
        	<pre>You very nice</pre>
        </div>
    );
  }
}

export default App;
