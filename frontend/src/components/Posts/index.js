import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostsList extends Component {
    render() {
        return (
            <ul>
                {this.props.posts.map(p => (
                    <div key={p.id}>
                        <Link to={`/posts/${p.id}`}>{p.title}</Link>
                    </div>
                ))}
            </ul>
        );
    }
}

export default PostsList;
