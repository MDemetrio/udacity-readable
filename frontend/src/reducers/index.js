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

const posts = (state = { postsList: [], selectedPost: { comments: [] } }, action) => {
    switch (action.type) {
        case ActionTypes.GET_POSTS_REQUEST:
        case ActionTypes.GET_POST_REQUEST:
        case ActionTypes.GET_COMMENTS_REQUEST:
        case ActionTypes.POST_POSTVOTE_REQUEST:
        case ActionTypes.POST_COMMENTVOTE_REQUEST:
        case ActionTypes.DELETE_POSTS_REQUEST:
        case ActionTypes.DELETE_COMMENT_REQUEST:
        case ActionTypes.POST_POST_REQUEST:
        case ActionTypes.PUT_POST_REQUEST:
        case ActionTypes.POST_COMMENT_REQUEST:
        case ActionTypes.PUT_COMMENT_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case ActionTypes.GET_POSTS_FAILURE:
        case ActionTypes.GET_POST_FAILURE:
        case ActionTypes.GET_COMMENTS_FAILURE:
        case ActionTypes.POST_POSTVOTE_FAILURE:
        case ActionTypes.POST_COMMENTVOTE_FAILURE:
        case ActionTypes.DELETE_POSTS_FAILURE:
        case ActionTypes.DELETE_COMMENT_FAILURE:
        case ActionTypes.POST_POST_FAILURE:
        case ActionTypes.PUT_POST_FAILURE:
        case ActionTypes.POST_COMMENT_FAILURE:
        case ActionTypes.PUT_COMMENT_FAILURE:
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
        case ActionTypes.GET_POST_SUCCESS:
            return {
                ...state,
                isFetching: false,
                selectedPost: action.response
            }
        case ActionTypes.GET_COMMENTS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                selectedPost: {
                    ...state.selectedPost,
                    comments: action.response
                }
            }
        case ActionTypes.DELETE_POSTS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                postsList: state.postsList.filter((item, index) => item.id !== action.response.id)
            }
        case ActionTypes.DELETE_COMMENT_SUCCESS:
            return {
                ...state,
                isFetching: false,
                selectedPost: {
                    ...state.selectedPost,
                    commentCount: state.selectedPost.commentCount -= 1,
                    comments: state.selectedPost.comments.filter((item, index) => item.id !== action.response.id)
                }
            }
        case ActionTypes.POST_POST_SUCCESS:
            return {
                ...state,
                isFetching: false,
                postsList: [...state.postsList, action.response]
            }
        case ActionTypes.POST_COMMENT_SUCCESS:
            return {
                ...state,
                isFetching: false,
                selectedPost: {
                    ...state.selectedPost,
                    commentCount: state.selectedPost.commentCount += 1,
                    comments: [...state.selectedPost.comments, action.response]
                }
            }
        case ActionTypes.POST_POSTVOTE_SUCCESS:
        case ActionTypes.PUT_POST_SUCCESS:
            return {
                ...state,
                isFetching: false,
                postsList: updateObjectInArray(state.postsList, action.response),
                selectedPost: { ...state.selectedPost, ...action.response }
            }
        case ActionTypes.PUT_COMMENT_SUCCESS:
        case ActionTypes.POST_COMMENTVOTE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                selectedPost: {
                    ...state.selectedPost,
                    comments: updateObjectInArray(state.selectedPost.comments, action.response)
                }
            }
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    categories,
    posts
})

export default rootReducer;