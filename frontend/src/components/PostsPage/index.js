import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { loadPosts } from "../../actions";
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import PostsList from "./PostList";
import OrderButton from "./OrderButton";

function orderPosts(posts, orderBy) {
  posts.sort((a, b) => {
    const result = a[orderBy.field] > b[orderBy.field];

    if (orderBy.ascending) {
      return result ? -1 : 1;
    } else {
      return result ? 1 : -1;
    }
  })
  return posts;
}

class PostsPage extends Component {
  state = {
    orderBy: {
      field: 'voteScore',
      ascending: true
    }
  }

  changeOrder = (e, field) => {
    e.preventDefault();
    this.setState(prevState => ({
      orderBy: {
        field: field,
        ascending: prevState.orderBy.field !== field ? true : !prevState.orderBy.ascending
      }
    }));
  }

  componentDidMount() {
    this.props.loadPosts(this.props.categoryId)
  }
  componentDidUpdate(prevProps) {
    if (prevProps.categoryId !== this.props.categoryId) {
      this.props.loadPosts(this.props.categoryId)
    }
  }
  render() {
    const { posts } = this.props;
    const { orderBy } = this.state;
    const sortedPosts = orderPosts(posts, orderBy);

    return (
      <div>
        <div>
          <OrderButton clickHandler={this.changeOrder} field='voteScore' orderBy={orderBy}>
            VoteScore
          </OrderButton>

          <OrderButton clickHandler={this.changeOrder} field='timestamp' orderBy={orderBy}>
            Date
          </OrderButton>
        </div>

        {sortedPosts &&
          <PostsList posts={sortedPosts} />
        }
      </div>
    );
  }
}

PostsPage.propTypes = {
  loadPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  categoryId: PropTypes.string
}

function mapStateToProps({ posts }, { match }) {
  return {
    categoryId: match.params.id,
    posts: posts.postsList
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadPosts: (category) => dispatch(loadPosts(category))
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostsPage))