import { combineReducers } from 'redux'
import * as ActionTypes from '../actions'

const categories = (state = { categoriesList: [] }, action) => {
    switch (action.type) {
        case ActionTypes.CATEGORIES_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case ActionTypes.CATEGORIES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                categoriesList: action.response.categories
            }
        case ActionTypes.CATEGORIES_FAILURE:
            return {
                ...state,
                error: action.error,
                isFetching: false
            }
        default:
            return state;
    }
}

const posts = (state = { postsList: [] }, action) => {
    switch (action.type) {
        case ActionTypes.POSTS_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case ActionTypes.POSTS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                postsList: action.response
            }
        case ActionTypes.POSTS_FAILURE:
            return {
                ...state,
                error: action.error,
                isFetching: false
            }
        default:
            return state;
    }}

const comments = (state = { comments: [] }, action) => {

    return state
}

const rootReducer = combineReducers({
    categories,
    posts,
    comments
})

export default rootReducer;