import React, { Component } from 'react';
import { loadPosts } from "../actions";
import { connect } from 'react-redux'
import PostsList from "./Posts";
import { withRouter } from 'react-router-dom';

class CategoriePage extends Component {
  componentDidMount() {
    this.props.loadPosts(this.props.match.params.id)
  }
  render() {
    console.log('categoriep rerender')
    return (
      <div>
        {this.props.posts &&
          <PostsList posts={this.props.posts} />
        }
      </div>
    );
  }
}


function mapStateToProps({ posts }) {
  return {
    posts: posts.postsList
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadPosts: (category) => dispatch(loadPosts(category))
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CategoriePage))