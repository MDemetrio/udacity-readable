import React, { Component } from 'react';
import PostForm from "../../components/PostForm";
import { StyledTitle } from "../../components/shared";
import Container from 'muicss/lib/react/container';
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom';
import { loadPost, putPost, postPost } from "../../actions";
import { guid } from "../../utils/helpers";
import { PUT_POST_SUCCESS, POST_POST_SUCCESS } from "../../actions";

class PostEditPage extends Component {
  state = {
    editMode: false,
    editSuccess: false
  }

  componentDidMount() {
    if (this.props.postId) {
      this.setState({ editMode: true });
      this.props.loadPost(this.props.postId);
    }
  }

  submitPost = (post) => {
    if (!this.state.editMode) {
      post.id = guid();
      this.props.postPost(post).then(this.editSuccess);
    }
    else {
      this.props.putPost(post.id, post).then(this.editSuccess);
    }
  }

  editSuccess = (response) => {
    switch (response.type) {
      case PUT_POST_SUCCESS:
      case POST_POST_SUCCESS:
        this.setState({ editSuccess: true })
        break;
      default:
        break;
    }
  }

  render() {
    const { selectedPost } = this.props;
    const { editMode, editSuccess } = this.state;
    return editSuccess ? <Redirect to='/' /> : (
      <Container>
        {
          editMode ?
            <StyledTitle>Edit Post {selectedPost.id}</StyledTitle> :
            <StyledTitle>New Post</StyledTitle>
        }
        <PostForm onSubmit={this.submitPost} initialData={editMode ? selectedPost : {}} />
      </Container>
    );
  }
}

function mapStateToProps({ posts }, { match }) {
  return {
    postId: match.params.post_id,
    selectedPost: posts.selectedPost
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadPost: postId => dispatch(loadPost(postId)),
    putPost: (postId, post) => dispatch(putPost(postId, post)),
    postPost: post => dispatch(postPost(post)),
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostEditPage))