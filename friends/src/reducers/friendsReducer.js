import { FETCH_FRIENDS_FAIL, FETCH_FRIENDS_START, FETCH_FRIENDS_SUCCESS } from '../actions';

const initialState = {
	friends: [],
	isLoading: false,
	error: ''
};

export const friendsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_FRIENDS_FAIL:
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
		default:
			return state;
	}
};
