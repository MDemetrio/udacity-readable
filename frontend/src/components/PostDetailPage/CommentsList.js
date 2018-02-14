import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { orderArray } from "../../utils/helpers";
import MdClose from 'react-icons/lib/md/close';
import MdEdit from 'react-icons/lib/md/edit';
import { IconButton, UpVoteIcon, DownVoteIcon, FooterContainer, FooterItemContainer, BodyContainer } from "../shared";
import { deleteComment, commentVote, postComment, putComment } from "../../actions";
import CommentForm from "./CommentForm";
import { guid } from "../../utils/helpers";
import Button from 'muicss/lib/react/button';
import Panel from 'muicss/lib/react/panel';

class CommentsList extends Component {
    state = {
        commentEdit: {
            editing: false,
            commentId: ""
        }
    }

    voteHandler = (e, postId, vote) => {
        e.preventDefault();
        this.props.commentVote(postId, vote);
    }

    excludeHandler = (e, postId) => {
        e.preventDefault();
        this.props.deleteComment(postId).then(
            this.setState({ deleted: true })
        );
    }

    editHandler = (e, commentId) => {
        e.preventDefault();
        this.setState(prevState => {
            const editing = prevState.commentEdit.commentId === commentId ? !prevState.commentEdit.editing : true
            return { commentEdit: { commentId, editing } }
        })
    }

    submitComment = (comment, editMode = false) => {
        if (!editMode) {
            comment.id = guid();
            this.props.postComment(comment);
        }
        else
            this.props.putComment(comment.id, comment);

        this.setState({
            commentEdit: {
                editing: false,
                commentId: ""
            }
        })
    }

    render() {
        const { postComments, postId } = this.props;
        const { commentEdit } = this.state;

        const comments = orderArray(postComments, { field: 'voteScore', ascending: true }).map(comment => ({
            ...comment,
            createdAt: new Date(comment.timestamp),
            editing: false,
        }));

        return (
            <div>
                <Button variant="raised" onClick={(e) => this.editHandler(e, "")}>New Comment</Button>
                {
                    (commentEdit.commentId === "" && commentEdit.editing) &&
                    <CommentForm onSubmit={this.submitComment} initialData={{ parentId: postId }} />
                }
                <ul>
                    {comments.map(c => (
                        <Panel key={c.id}>
                            <BodyContainer>{c.body}</BodyContainer>

                            <FooterContainer>
                                <div>{c.author}, {c.createdAt.toDateString()}</div>

                                <FooterItemContainer>
                                    {c.voteScore}

                                    <IconButton onClick={(e) => this.voteHandler(e, c.id, "upVote")}>
                                        <UpVoteIcon />
                                    </IconButton>

                                    <IconButton onClick={(e) => this.voteHandler(e, c.id, "downVote")}>
                                        <DownVoteIcon />
                                    </IconButton>
                                </FooterItemContainer>

                                <FooterItemContainer>
                                    <IconButton onClick={(e) => this.editHandler(e, c.id)}>
                                        <MdEdit />
                                    </IconButton>

                                    <IconButton onClick={(e) => this.excludeHandler(e, c.id)}>
                                        <MdClose />
                                    </IconButton>
                                </FooterItemContainer>
                            </FooterContainer>
                            {
                                (commentEdit.commentId === c.id && commentEdit.editing) &&
                                <CommentForm onSubmit={this.submitComment} initialData={c} editMode />
                            }
                        </Panel>
                    ))}
                </ul>
            </div>
        )
    }
}

CommentsList.propTypes = {
    postComments: PropTypes.array.isRequired,
    postId: PropTypes.string.isRequired
}

function mapDispatchToProps(dispatch) {
    return {
        commentVote: (commentId, option) => dispatch(commentVote(commentId, option)),
        deleteComment: commentId => dispatch(deleteComment(commentId)),
        postComment: comment => dispatch(postComment(comment)),
        putComment: (commentId, comment) => dispatch(putComment(commentId, comment))
    }
}

export default withRouter(connect(null, mapDispatchToProps)(CommentsList));