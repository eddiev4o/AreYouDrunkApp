import { combineReducers } from 'redux';
import UserProfileReducer from './UserProfileReducer';
import AuthReducer from './AuthReducer';

export default combineReducers({
  auth: AuthReducer,
  userProfile: UserProfileReducer
});
