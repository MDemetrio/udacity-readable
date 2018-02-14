import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { loadPosts, postVote, deletePost } from "../../actions";
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import PostsList from "./PostList";
import OrderButton from "./OrderButton";
import { FilterContainer, StyledLink } from "../shared";
import { orderArray } from "../../utils/helpers";
import Button from 'muicss/lib/react/button';

class PostsPage extends Component {
  state = {
    orderBy: {
      field: 'voteScore',
      ascending: true
    }
  }

  voteHandler = (e, postId, vote) => {
    e.preventDefault();
    this.props.postVote(postId, vote)
  }

  excludeHandler = (e, postId) => {
    e.preventDefault();
    this.props.deletePost(postId)
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
    const sortedPosts = orderArray(posts, orderBy);

    return (
      <div>
        <div style={{ 'display': 'flex', 'justifyContent': 'space-between', 'alignItems': 'baseline' }}>
          <StyledLink to='/new-post/'>
            <Button>
              New Post
            </Button>
          </StyledLink>

          <FilterContainer>
            <OrderButton clickHandler={this.changeOrder} field='voteScore' orderBy={orderBy}>
              Votes
          </OrderButton>

            <OrderButton clickHandler={this.changeOrder} field='timestamp' orderBy={orderBy}>
              Date
          </OrderButton>
          </FilterContainer>
        </div>
        {sortedPosts &&
          <PostsList posts={sortedPosts} voteHandler={this.voteHandler} excludeHandler={this.excludeHandler} />
        }
      </div>
    );
  }
}

PostsPage.propTypes = {
  loadPosts: PropTypes.func.isRequired,
  postVote: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
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
    loadPosts: category => dispatch(loadPosts(category)),
    postVote: (post, vote) => dispatch(postVote(post, vote)),
    deletePost: postId => dispatch(deletePost(postId)),
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostsPage))