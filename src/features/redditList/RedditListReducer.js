import { FETCH_REDDIT } from '../../constants/ActionTypes'

function posts(state = {
    isFetching: false,
    error: false,
    value: []
  }, action) {
    switch (action.type) {
      case FETCH_REDDIT.REQUEST:
        return {
          ...state,
          isFetching: true,
          error: false
        };
      case FETCH_REDDIT.SUCCESS:
        return {
          ...state,
          isFetching: false,
          value: action.payload,
        };
      case FETCH_REDDIT.FAILURE:
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
  