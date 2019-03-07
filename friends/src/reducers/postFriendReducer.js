// import { POST_FRIEND_SUCCESS, POST_FRIEND_FAIL, POST_FRIEND_START ,LOGIN_STARTED,LOGIN_SUCCESS} from '../actions';
// import uuid from 'uuid';
// const initialState = {
// 	newFriend: {
// 		name: '',
// 		age: null,
// 		email: ''
// 	},
// 	isLoading: false,
// 	error: ''
// };

// export const postFriendReducer = (state = initialState, action) => {
// 	switch (action.type) {
// 		case POST_FRIEND_START:
// 			return {
// 				...state,
// 				isLoading: true,
// 				error: ''
// 			};
// 		case POST_FRIEND_SUCCESS:
// 			//console.log('reducer ',action.payload)
// 			return {
// 				...state,
// 				friends: action.payload,
// 				isLoading: false,
// 				error: ''
// 			};
// 		case POST_FRIEND_FAIL:
// 			return {
// 				...state,
// 				isLoading: false,
// 				error: action.payload
// 			};
// 		default:
// 			return state;
// 	}
// };
