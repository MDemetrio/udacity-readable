import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import triangle from '../../assets/triangle.svg';

const TitleContainer = styled.div`
    font-size: 2em;
    color: #000000;
`

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

const VoteScoreContainer = styled.div`
    display: flex;
    font-size: 1.2em;
`
const StyledImg = styled.img`
    width: 1em;
`

class PostsList extends Component {
    render() {
        const posts = this.props.posts.map(p => ({
            ...p,
            createdAt: new Date(p.timestamp)
        })
        )
        return (
            <ul>
                {posts.map(p => (
                    <div key={p.id}>
                        <Link to={`/posts/${p.id}`} style={{ textDecoration: 'none' }}>
                            <TitleContainer>{p.title}</TitleContainer>
                            <BodyContainer>{p.body}</BodyContainer>
                            <FooterContainer>
                                <div>{p.author}, {p.createdAt.toDateString()}</div>
                                <VoteScoreContainer>
                                    {p.voteScore}
                                    <StyledImg src={triangle} alt="upvotes" />
                                </VoteScoreContainer>
                            </FooterContainer>
                            <br />
                        </Link>
                    </div>
                ))}
            </ul>
        );
    }
}

export default PostsList;
