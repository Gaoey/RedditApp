import {
  FETCH_REDDIT
} from '../../constants/ActionTypes'

import {
  BASE_REDDIT_URL
} from '../../constants/endpoint.js'
import { project } from '../../config';

function fetchPostsFailure(error) {
  return {
    type: FETCH_REDDIT.FAILURE,
    payload: error.message
  };
}

function fetchPostsSuccess(data) {
  return {
    type: FETCH_REDDIT.SUCCESS,
    meta: {
      receivedAt: Date.now(),
      config: data.config,
      headers: data.headers,
      request: data.request
    },
    payload: data.data.data.children
  };
}

function fetchPosts(axios, category) {
  return dispatch => {
    dispatch({
      type: FETCH_REDDIT.REQUEST
    });
    return axios(`${BASE_REDDIT_URL}r/${category}.json`)
      .then(
      data => dispatch(fetchPostsSuccess(data)),
      error => dispatch(fetchPostsFailure(error))
      );
  };
}

function shouldFetchPosts(state) {
  const posts = state[project.name].posts
  return posts.value instanceof Array || posts.isFetching
}

export function fetchPostsIfNeeded(category) {
  return (dispatch, getState, axios) => {
    if (shouldFetchPosts(getState())) {
      return dispatch(fetchPosts(axios, category))
    }
  };
}
