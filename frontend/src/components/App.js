import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { fetchCategories, loadPosts } from "../actions";
import PropTypes from 'prop-types'
import HomePage from './HomePage';
import CategoriePage from './CategoriePage';
import PostDetailPage from './PostDetailPage';
import Header from './Header';

class App extends Component {
  static propTypes = {
    fetchCategories: PropTypes.func.isRequired,
    loadPosts: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.fetchCategories();
    this.props.loadPosts();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/posts/:id" component={PostDetailPage} />
          <Route path="/categories/:id" component={CategoriePage} />
          <Route render={() => (<h1>404</h1>)} />
        </Switch>
      </div>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchCategories: () => dispatch(fetchCategories()),
    loadPosts: () => dispatch(loadPosts())
  }
}

export default withRouter(connect(undefined, mapDispatchToProps)(App))