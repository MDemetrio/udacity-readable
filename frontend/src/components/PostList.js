import React, { Component } from 'react';
import PropTypes from 'prop-types'
import MdChatBubbleOutline from 'react-icons/lib/md/chat-bubble-outline';
import MdClose from 'react-icons/lib/md/close';
import MdEdit from 'react-icons/lib/md/edit';
import { StyledLink, StyledTitle, IconButton, UpVoteIcon, DownVoteIcon, FooterContainer, FooterItemContainer } from "./shared";
import { Link } from 'react-router-dom';
import Panel from 'muicss/lib/react/panel';

class PostsList extends Component {
    render() {
        const { posts, voteHandler, excludeHandler } = this.props;
        const p = posts.map(post => ({
            createdAt: new Date(post.timestamp),
            ...post,
        }));

        return (
            <ul>
                {p.map(post => (
                    <Panel key={post.id}>
                        <StyledTitle>
                            <StyledLink to={`/${post.category}/${post.id}`}>
                                {post.title}
                            </StyledLink>
                        </StyledTitle>

                        <FooterContainer>
                            <div>{post.author}, {post.createdAt.toDateString()}</div>

                            <FooterItemContainer>
                                {post.commentCount}
                                <MdChatBubbleOutline />
                            </FooterItemContainer>

                            <FooterItemContainer>
                                {post.voteScore}

                                <IconButton onClick={(e) => voteHandler(e, post.id, "upVote")}>
                                    <UpVoteIcon />
                                </IconButton>

                                <IconButton onClick={(e) => voteHandler(e, post.id, "downVote")}>
                                    <DownVoteIcon />
                                </IconButton>
                            </FooterItemContainer>
                            <FooterItemContainer>

                                <Link to={`/edit-post/${post.id}`}>
                                    <IconButton>
                                        <MdEdit />
                                    </IconButton>
                                </Link>

                                <IconButton onClick={(e) => excludeHandler(e, post.id)}>
                                    <MdClose />
                                </IconButton>
                            </FooterItemContainer>
                        </FooterContainer>
                        <br />
                    </Panel>
                ))}
            </ul>
        );
    }
}

PostsList.propTypes = {
    voteHandler: PropTypes.func.isRequired,
    excludeHandler: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
}

export default PostsList;
