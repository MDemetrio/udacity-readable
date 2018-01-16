import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostsList extends Component {
    render() {
        const posts = this.props.posts.map(p => ({
            ...p,
            createdAt: new Date(p.timestamp)
          })
         )
        console.log(posts)
        return (
            <ul>
                {posts.map(p => (
                    <div key={p.id}>
                        <Link to={`/posts/${p.id}`}>
                        <div>{p.title} {p.voteScore}</div> 
                        <div>{p.createdAt.getFullYear()}</div> 
                        <br/>
                        </Link>
                    </div>
                ))}
            </ul>
        );
    }
}

export default PostsList;
