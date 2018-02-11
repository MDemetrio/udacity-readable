import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PostsPage from './PostsPage';
import PostDetailPage from './PostDetailPage';
import PostCreatePage from './PostCreatePage';
import Header from './Header';
import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 2% 4%;

  @media (min-width: 600px) {
    margin: 2% 16%;
  }
  @media (min-width: 1024px) {
    margin: 2% 24%;
  }
`

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <PageContainer>
          <Switch>
            <Route exact path="/" component={PostsPage} />
            <Route path="/categories/:id" component={PostsPage} />
            <Route path="/:category/:post_id" component={PostDetailPage} />
            <Route path="/new-post" component={PostCreatePage} />
            <Route path="/edit-post/:id" component={PostCreatePage} />
            <Route render={() => (<h1>404</h1>)} />
          </Switch>
        </PageContainer>
      </div>
    );
  }
}


export default App;