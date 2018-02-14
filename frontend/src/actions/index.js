import { CALL_API } from '../utils/api'

//CATEGORIES
export const GET_CATEGORIES_REQUEST = 'GET_CATEGORIES_REQUEST'
export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS'
export const GET_CATEGORIES_FAILURE = 'GET_CATEGORIES_FAILURE'

//POSTS
export const GET_POSTS_REQUEST = 'GET_POSTS_REQUEST'
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE'

export const GET_POST_REQUEST = 'GET_POST_REQUEST'
export const GET_POST_SUCCESS = 'GET_POST_SUCCESS'
export const GET_POST_FAILURE = 'GET_POST_FAILURE'

export const POST_POST_REQUEST = 'POST_POST_REQUEST'
export const POST_POST_SUCCESS = 'POST_POST_SUCCESS'
export const POST_POST_FAILURE = 'POST_POST_FAILURE'

export const PUT_POST_REQUEST = 'PUT_POST_REQUEST'
export const PUT_POST_SUCCESS = 'PUT_POST_SUCCESS'
export const PUT_POST_FAILURE = 'PUT_POST_FAILURE'

export const POST_POSTVOTE_REQUEST = 'POST_POSTVOTE_REQUEST'
export const POST_POSTVOTE_SUCCESS = 'POST_POSTVOTE_SUCCESS'
export const POST_POSTVOTE_FAILURE = 'POST_POSTVOTE_FAILURE'

export const DELETE_POSTS_REQUEST = 'DELETE_POSTS_REQUEST'
export const DELETE_POSTS_SUCCESS = 'DELETE_POSTS_SUCCESS'
export const DELETE_POSTS_FAILURE = 'DELETE_POSTS_FAILURE'

//COMMENTS
export const GET_COMMENTS_REQUEST = 'GET_COMMENTS_REQUEST'
export const GET_COMMENTS_SUCCESS = 'GET_COMMENTS_SUCCESS'
export const GET_COMMENTS_FAILURE = 'GET_COMMENTS_FAILURE'

export const POST_COMMENT_REQUEST = 'POST_COMMENT_REQUEST'
export const POST_COMMENT_SUCCESS = 'POST_COMMENT_SUCCESS'
export const POST_COMMENT_FAILURE = 'POST_COMMENT_FAILURE'

export const PUT_COMMENT_REQUEST = 'PUT_COMMENT_REQUEST'
export const PUT_COMMENT_SUCCESS = 'PUT_COMMENT_SUCCESS'
export const PUT_COMMENT_FAILURE = 'PUT_COMMENT_FAILURE'

export const POST_COMMENTVOTE_REQUEST = 'POST_COMMENTVOTE_REQUEST'
export const POST_COMMENTVOTE_SUCCESS = 'POST_COMMENTVOTE_SUCCESS'
export const POST_COMMENTVOTE_FAILURE = 'POST_COMMENTVOTE_FAILURE'

export const DELETE_COMMENT_REQUEST = 'DELETE_COMMENT_REQUEST'
export const DELETE_COMMENT_SUCCESS = 'DELETE_COMMENT_SUCCESS'
export const DELETE_COMMENT_FAILURE = 'DELETE_COMMENT_FAILURE'



export const fetchCategories = () => {
    return ({
        [CALL_API]: {
            types: [GET_CATEGORIES_REQUEST, GET_CATEGORIES_SUCCESS, GET_CATEGORIES_FAILURE],
            endpoint: `/categories`
        }
    })
}

const fetchCategoriePosts = category => ({
    [CALL_API]: {
        types: [GET_POSTS_REQUEST, GET_POSTS_SUCCESS, GET_POSTS_FAILURE],
        endpoint: `/${category}/posts`
    }
})

const fetchAllPosts = () => ({
    [CALL_API]: {
        types: [GET_POSTS_REQUEST, GET_POSTS_SUCCESS, GET_POSTS_FAILURE],
        endpoint: `/posts`
    }
})

export const loadPosts = category => (dispatch, getState) => {
    if (category) {
        return dispatch(fetchCategoriePosts(category))
    } else {
        return dispatch(fetchAllPosts())
    }
}

export const loadPost = (id) => {
    return ({
        [CALL_API]: {
            types: [GET_POST_REQUEST, GET_POST_SUCCESS, GET_POST_FAILURE],
            endpoint: `/posts/${id}`
        }
    })
}

export const loadComments = (postId) => {
    return ({
        [CALL_API]: {
            types: [GET_COMMENTS_REQUEST, GET_COMMENTS_SUCCESS, GET_COMMENTS_FAILURE],
            endpoint: `/posts/${postId}/comments`
        }
    })
}

export const postVote = (id, option) => {
    return ({
        [CALL_API]: {
            types: [POST_POSTVOTE_REQUEST, POST_POSTVOTE_SUCCESS, POST_POSTVOTE_FAILURE],
            endpoint: `/posts/${id}`,
            method: 'POST',
            body: { option }
        }
    })
}

export const deletePost = postId => {
    return ({
        [CALL_API]: {
            types: [DELETE_POSTS_REQUEST, DELETE_POSTS_SUCCESS, DELETE_POSTS_FAILURE],
            endpoint: `/posts/${postId}`,
            method: 'DELETE'
        }
    })
}

export const deleteComment = commentId => {
    return ({
        [CALL_API]: {
            types: [DELETE_COMMENT_REQUEST, DELETE_COMMENT_SUCCESS, DELETE_COMMENT_FAILURE],
            endpoint: `/comments/${commentId}`,
            method: 'DELETE'
        }
    })
}

export const commentVote = (id, option) => {
    return ({
        [CALL_API]: {
            types: [POST_COMMENTVOTE_REQUEST, POST_COMMENTVOTE_SUCCESS, POST_COMMENTVOTE_FAILURE],
            endpoint: `/comments/${id}`,
            method: 'POST',
            body: { option }
        }
    })
}

export const postComment = (comment) => {
    return ({
        [CALL_API]: {
            types: [POST_COMMENT_REQUEST, POST_COMMENT_SUCCESS, POST_COMMENT_FAILURE],
            endpoint: `/comments`,
            method: 'POST',
            body: comment
        }
    })
}

export const putComment = (commentId, comment) => {
    return ({
        [CALL_API]: {
            types: [PUT_COMMENT_REQUEST, PUT_COMMENT_SUCCESS, PUT_COMMENT_FAILURE],
            endpoint: `/comments/${commentId}`,
            method: 'PUT',
            body: comment
        }
    })
}

export const postPost = (post) => {
    return ({
        [CALL_API]: {
            types: [POST_POST_REQUEST, POST_POST_SUCCESS, POST_POST_FAILURE],
            endpoint: `/posts`,
            method: 'POST',
            body: post
        }
    })
}

export const putPost = (postId, post) => {
    return ({
        [CALL_API]: {
            types: [PUT_POST_REQUEST, PUT_POST_SUCCESS, PUT_POST_FAILURE],
            endpoint: `/posts/${postId}`,
            method: 'PUT',
            body: post
        }
    })
}