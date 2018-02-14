import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PostsPage from './PostsPage';
import PostDetailPage from './PostDetailPage';
import PostEditPage from './PostEditPage';
import Header from '../components/Header';
import styled from 'styled-components';
import Container from 'muicss/lib/react/container';

const PageContainer = styled(Container)`
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
        <PageContainer fluid>
          <Switch>
            <Route exact path="/" component={PostsPage} />
            <Route path="/new-post" component={PostEditPage} />
            <Route path="/categories/:id" component={PostsPage} />
            <Route path="/edit-post/:post_id" component={PostEditPage} />
            <Route path="/:category/:post_id" component={PostDetailPage} />
            <Route render={() => (<h1>404 Not Found</h1>)} />
          </Switch>
        </PageContainer>
      </div>
    );
  }
}


export default App;