import { generateActionType } from '../utils/utilFunction'
export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST'
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE'

export const SET_API_IS_CALLING_TRUE = 'SET_API_IS_CALLING_TRUE'
export const SET_API_IS_CALLING_FALSE = 'SET_API_IS_CALLING_FALSE'

export const FETCH_REDDIT = generateActionType('FETCH_REDDIT')
export const FETCH_REDDIT_DETAIL = generateActionType('FETCH_REDDIT_DETAIL')