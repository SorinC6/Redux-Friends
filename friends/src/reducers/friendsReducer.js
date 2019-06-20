import {
	FETCH_FRIENDS_FAIL,
	FETCH_FRIENDS_START,
	FETCH_FRIENDS_SUCCESS,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	POST_FRIEND_START,
	POST_FRIEND_SUCCESS,
	POST_FRIEND_FAIL,
	DELE_FRIEND_START,
	DELETE_FRIEND_SUCCESS,
	DELETE_FRIEND_FAIL
} from '../actions';

const initialState = {
	friends: [],
	isLoading: false,
	error: ''
};

export const friendsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_FRIENDS_START:
			return {
				...state,
				isLoading: true,
				error: ''
			};
		case FETCH_FRIENDS_SUCCESS:
			//console.log('reducer ',action.payload)
			return {
				...state,
				friends: action.payload,
				isLoading: false,
				error: ''
			};
		case FETCH_FRIENDS_FAIL:
			return {
				...state,
				isLoading: false,
				error: action.payload
			};
		case POST_FRIEND_START:
			return {
				...state,
				isLoading: true,
				error: ''
			};
		case POST_FRIEND_SUCCESS:
			return {
				...state,
				friends: state.friends.concat(action.payload),
				isLoading: false,
				error: ''
			};
		case POST_FRIEND_FAIL:
			return {
				...state,
				isLoading: false,
				error: action.payload
         };
      case DELETE_FRIEND_SUCCESS:
      //console.log('reducer',action.payload)
         return {
            ...state,
            friends: state.friends.filter(fr=> fr.id !== action.payload),
            isLoading: false,
				error: ''
         }
		default:
			return state;
	}
};
