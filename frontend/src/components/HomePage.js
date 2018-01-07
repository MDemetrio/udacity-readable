import React, { Component } from 'react';
import {
    Link
  } from 'react-router-dom';
class HomePage extends Component {
    render() {
        return (
            <div>
                <h1>Home</h1>
                <ul>
                    <li><Link to="/posts/4">post 4</Link></li>
                    <li><Link to="/posts/6">post 6</Link></li>
                </ul>
            </div>
        );
    }
}

export default HomePage;
