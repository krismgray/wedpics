import React, { Component } from 'react';
import Home from './Home';
import Photographers from './Photographers';
import Videographers from './Videographers';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/Photographers' component={Photographers} />
            <Route exact path='/Videographers' component={Videographers} />
          </Switch>
      </div>
    );
  }
}

export default App;
