import React, { Component } from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import MdChatBubbleOutline from 'react-icons/lib/md/chat-bubble-outline';
import MdClose from 'react-icons/lib/md/close';
import MdEdit from 'react-icons/lib/md/edit';
import { StyledLink, IconButton } from "../shared";

const BodyContainer = styled.div`
    margin: 16px 0;
    color: #95989A;
`

const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 0.9em;
    color: #95989A;
`

const FooterItemContainer = styled.div`
    display: flex;
    font-size: 1.2em;
`

const UpVoteIcon = () => (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="1225 522 20 16">
        <path fill="#000" d="M12,7.77,18.39,18H5.61L12,7.77M12,4,2,20H22Z" transform="translate(1223 518)" />
    </svg>

);

const DownVoteIcon = () => (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="1249 522 20 16">
        <path fill="#000" d="M12,7.77,18.39,18H5.61L12,7.77M12,4,2,20H22Z" transform="translate(1271 542) rotate(180)" />
    </svg>
);


class PostsList extends Component {
    render() {
        const { voteHandler, excludeHandler, editHandler } = this.props;
        const posts = this.props.posts.map(p => ({
            createdAt: new Date(p.timestamp),
            ...p,
        }));

        return (
            <ul>
                {posts.map(p => (
                    <div key={p.id}>

                        <StyledLink to={`/posts/${p.id}`} style={{ 'fontSize': '1.8em' }}>
                            {p.title}
                        </StyledLink>

                        <BodyContainer>{p.body}</BodyContainer>

                        <FooterContainer>
                            <div>{p.author}, {p.createdAt.toDateString()}</div>

                            <FooterItemContainer>
                                {p.commentCount}
                                <MdChatBubbleOutline />
                            </FooterItemContainer>

                            <FooterItemContainer>
                                {p.voteScore}

                                <IconButton onClick={(e) => voteHandler(p.id, "upVote")}>
                                    <UpVoteIcon />
                                </IconButton>

                                <IconButton onClick={(e) => voteHandler(p.id, "downVote")}>
                                    <DownVoteIcon />
                                </IconButton>
                            </FooterItemContainer>
                            <FooterItemContainer>

                                <IconButton onClick={(e) => editHandler(p.id)}>
                                    <MdEdit />
                                </IconButton>

                                <IconButton onClick={(e) => excludeHandler(p.id)}>
                                    <MdClose />
                                </IconButton>
                            </FooterItemContainer>
                        </FooterContainer>
                        <br />
                    </div>
                ))}
            </ul>
        );
    }
}

PostsList.propTypes = {
    voteHandler: PropTypes.func.isRequired,  
    excludeHandler: PropTypes.func.isRequired,
    editHandler: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
  }

export default PostsList;
