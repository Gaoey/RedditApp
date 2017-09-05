import { combineReducers } from 'redux'
import posts from './redditList/RedditListReducer'
import settings from './setting/settingReducer'

export default combineReducers({
  posts,
  settings
});
