import { CALL_API } from '../utils/api'

export const CATEGORIES_REQUEST = 'CATEGORIES_REQUEST'
export const CATEGORIES_SUCCESS = 'CATEGORIES_SUCCESS'
export const CATEGORIES_FAILURE = 'CATEGORIES_FAILURE'

export const POSTS_REQUEST = 'POSTS_REQUEST'
export const POSTS_SUCCESS = 'POSTS_SUCCESS'
export const POSTS_FAILURE = 'POSTS_FAILURE'

export const COMMENTS_REQUEST = 'COMMENTS_REQUEST'
export const COMMENTS_SUCCESS = 'COMMENTS_SUCCESS'
export const COMMENTS_FAILURE = 'COMMENTS_FAILURE'

export const fetchCategories = () => {
    return ({
        [CALL_API]: {
            types: [CATEGORIES_REQUEST, CATEGORIES_SUCCESS, CATEGORIES_FAILURE],
            endpoint: `/categories`
        }
    })
}

const fetchCategoriePosts = category => ({
    [CALL_API]: {
        types: [POSTS_REQUEST, POSTS_SUCCESS, POSTS_FAILURE],
        endpoint: `/${category}/posts`
    }
})

const fetchAllPosts = () => ({
    [CALL_API]: {
        types: [POSTS_REQUEST, POSTS_SUCCESS, POSTS_FAILURE],
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