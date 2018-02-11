import { combineReducers } from 'redux'
import * as ActionTypes from '../actions'
import { updateObjectInArray } from "../utils/helpers";

const categories = (state = { categoriesList: [] }, action) => {
    switch (action.type) {
        case ActionTypes.GET_CATEGORIES_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case ActionTypes.GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                categoriesList: action.response.categories
            }
        case ActionTypes.GET_CATEGORIES_FAILURE:
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
        case ActionTypes.GET_POSTS_REQUEST:
        case ActionTypes.POST_POSTVOTE_REQUEST:
        case ActionTypes.DELETE_POSTS_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case ActionTypes.GET_POSTS_FAILURE:
        case ActionTypes.DELETE_POSTS_FAILURE:
            return {
                ...state,
                error: action.error,
                isFetching: false
            }

        case ActionTypes.GET_POSTS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                postsList: action.response
            }

        case ActionTypes.POST_POSTVOTE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                postsList: updateObjectInArray(state.postsList, action)
            }
        case ActionTypes.DELETE_POSTS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                postsList: state.postsList.filter((item, index) => item.id !== action.response.id)
            }
        default:
            return state;
    }
}

const comments = (state = { comments: [] }, action) => {

    return state
}

const rootReducer = combineReducers({
    categories,
    posts,
    comments
})

export default rootReducer;