import { combineReducers } from 'redux'
import posts from './redditList/redditListReducer'
import postDetail from './redditList/redditDetail/redditDetailReducer'
import settings from './setting/settingReducer'

export default combineReducers({
  posts,
  postDetail,
  settings
});
