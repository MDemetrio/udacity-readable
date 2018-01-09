import React, { Component } from 'react';
import { connect } from 'react-redux'
import PostsList from "./Posts";

class HomePage extends Component {
    render() {
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

export default connect(mapStateToProps)(HomePage)