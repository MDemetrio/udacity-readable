import { CALL_API } from '../utils/api'

export const GET_CATEGORIES_REQUEST = 'GET_CATEGORIES_REQUEST'
export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS'
export const GET_CATEGORIES_FAILURE = 'GET_CATEGORIES_FAILURE'

export const GET_POSTS_REQUEST = 'GET_POSTS_REQUEST'
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE'

export const POST_POSTVOTE_REQUEST = 'POST_POSTS_REQUEST'
export const POST_POSTVOTE_SUCCESS = 'POST_POSTS_SUCCESS'
export const POST_POSTVOTE_FAILURE = 'POST_POSTS_FAILURE'

export const DELETE_POSTS_REQUEST = 'DELETE_POSTS_REQUEST'
export const DELETE_POSTS_SUCCESS = 'DELETE_POSTS_SUCCESS'
export const DELETE_POSTS_FAILURE = 'DELETE_POSTS_FAILURE'


export const COMMENTS_SUCCESS = 'COMMENTS_SUCCESS'

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


export const postVote = (id, option) => {
    return ({
        [CALL_API]: {
            types: [POST_POSTVOTE_REQUEST, POST_POSTVOTE_SUCCESS, POST_POSTVOTE_FAILURE],
            endpoint: `/posts/${id}`,
            method: 'POST',
            body: {option}
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