import React, { Component } from 'react';


class PostDetail extends Component {
  render() {
    return (
      <div>
        <h1>Post {this.props.match.params.id}</h1>

      </div>
    );
  }
}

export default PostDetail;
