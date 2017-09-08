import {
  FETCH_REDDIT_DETAIL
} from '../../../constants/ActionTypes'

import {
  BASE_REDDIT_URL
} from '../../../constants/endpoint.js'
import { project } from '../../../config';

function fetchPostsFailure(error) {
  return {
    type: FETCH_REDDIT_DETAIL.FAILURE,
    payload: error.message
  };
}

function fetchPostsSuccess(data) {
  return {
    type: FETCH_REDDIT_DETAIL.SUCCESS,
    meta: {
      receivedAt: Date.now(),
      config: data.config,
      headers: data.headers,
      request: data.request
    },
    payload: data.data[0].data.children[0].data,
    comment: data.data[1].data.children
  };
}

function fetchPosts(axios, id) {
  return dispatch => {
    dispatch({
      type: FETCH_REDDIT_DETAIL.REQUEST
    });
    return axios(`${BASE_REDDIT_URL}/${id}.json`)
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

export function fetchPostsIfNeeded(id) {
  return (dispatch, getState, axios) => {
    if (shouldFetchPosts(getState())) {
      return dispatch(fetchPosts(axios, id))
    }
  };
}
