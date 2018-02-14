import React, { Component } from 'react';
import PropTypes from 'prop-types'
import MdChatBubbleOutline from 'react-icons/lib/md/chat-bubble-outline';
import MdClose from 'react-icons/lib/md/close';
import MdEdit from 'react-icons/lib/md/edit';
import { IconButton, UpVoteIcon, DownVoteIcon, StyledTitle, FooterContainer, FooterItemContainer, BodyContainer } from "../../components/shared";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom';
import { postVote, deletePost, loadPost, loadComments } from "../../actions";
import CommentsList from "../../components/CommentsList";
import Panel from 'muicss/lib/react/panel';

class PostDetail extends Component {
  state = {
    deleted: false
  }

  componentDidMount() {
    this.props.loadPost(this.props.postId).then(({ response }) => {
      if (response.id)
        this.props.loadComments(this.props.postId);
      else
        this.setState({ deleted: true })
    })
  }

  voteHandler = (e, postId, vote) => {
    e.preventDefault();
    this.props.postVote(postId, vote);
  }

  excludeHandler = (e, postId) => {
    e.preventDefault();
    this.props.deletePost(postId).then(
      this.setState({ deleted: true })
    );
  }

  render() {
    const { selectedPost, postId } = this.props;
    const { deleted } = this.state;

    const p = {
      ...selectedPost,
      createdAt: selectedPost && new Date(selectedPost.timestamp),
    }

    return deleted === true ? <Redirect to='/' /> : (
      <div>
        <Panel>
          <StyledTitle>
            {p.title}
          </StyledTitle>

          <BodyContainer>{p.body}</BodyContainer>

          <FooterContainer>
            <div>{p.author}, {p.createdAt.toDateString()}</div>

            <FooterItemContainer>
              {p.voteScore}

              <IconButton onClick={(e) => this.voteHandler(e, p.id, "upVote")}>
                <UpVoteIcon />
              </IconButton>

              <IconButton onClick={(e) => this.voteHandler(e, p.id, "downVote")}>
                <DownVoteIcon />
              </IconButton>
            </FooterItemContainer>

            <FooterItemContainer>
              <Link to={`/edit-post/${p.id}`}>
                <IconButton>
                  <MdEdit />
                </IconButton>
              </Link>

              <IconButton onClick={(e) => this.excludeHandler(e, p.id)}>
                <MdClose />
              </IconButton>
            </FooterItemContainer>
          </FooterContainer>
        </Panel>
        <div style={{ margin: '48px 0px' }}>
          <StyledTitle style={{ 'fontSize': '1.5em' }}>
            {`${p.commentCount} Comments`}
            <MdChatBubbleOutline />
          </StyledTitle>

          {p.comments && <CommentsList postId={postId} postComments={p.comments} />}
        </div>
      </div>
    );
  }
}

PostDetail.propTypes = {
  selectedPost: PropTypes.object.isRequired,
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
    loadComments: postId => dispatch(loadComments(postId)),
    postVote: (postId, vote) => dispatch(postVote(postId, vote)),
    deletePost: postId => dispatch(deletePost(postId)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostDetail))