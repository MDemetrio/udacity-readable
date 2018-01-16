import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PostsPage from './PostsPage';
import PostDetailPage from './PostDetailPage';
import PostCreatePage from './PostCreatePage';

import Header from './Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={PostsPage} />
          <Route path="/categories/:id" component={PostsPage} />
          <Route path="/posts/:id" component={PostDetailPage} />
          <Route path="/new-post" component={PostCreatePage} />
          <Route render={() => (<h1>404</h1>)} />
        </Switch>
      </div>
    );
  }
}


export default App;