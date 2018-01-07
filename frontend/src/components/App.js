import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import HomePage from './HomePage';
import CategoriePage from './CategoriePage';
import PostDetailPage from './PostDetailPage';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/posts/:id" component={PostDetailPage} />
            <Route path="/categories/:id" component={CategoriePage} />
            <Route render={() => (<h1>404</h1>)}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
