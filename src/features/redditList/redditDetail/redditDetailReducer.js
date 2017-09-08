import { FETCH_REDDIT_DETAIL } from '../../../constants/ActionTypes'

function posts(state = {
    isFetching: false,
    error: false,
    value: []
  }, action) {
    switch (action.type) {
      case FETCH_REDDIT_DETAIL.REQUEST:
        return {
          ...state,
          isFetching: true,
          error: false
        };
      case FETCH_REDDIT_DETAIL.SUCCESS:
        return {
          ...state,
          isFetching: false,
          value: action.payload,
        };
      case FETCH_REDDIT_DETAIL.FAILURE:
        return {
          ...state,
          isFetching: false,
          error: action.payload
        };
      default:
        return state;
    }
  }
  
  export default posts;
  