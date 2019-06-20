import { combineReducers } from 'redux';
import { friendsReducer } from './friendsReducer';
import { postFriendReducer } from './postFriendReducer';

export default combineReducers({
	friendsReducer
});
