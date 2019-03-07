import axios from 'axios';
import axiosWithAuth from '../axios/axios';

export const LOGIN_STARTED = 'LOGIN_STARTED';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESSS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const FETCH_FRIENDS_START = 'FETCH_FRIENDS_START';
export const FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS_SUCCESS';
export const FETCH_FRIENDS_FAIL = 'FETCH_FRIENDS_FAIL';

export const POST_FRIEND_START = 'POST_FRIEND_START';
export const POST_FRIEND_SUCCESS = 'POST_FRIEND_SUCCESS';
export const POST_FRIEND_FAIL = 'POST_FRIEND_FAIL';

export const login = (userCredential) => (dispatch) => {
	dispatch({ type: LOGIN_STARTED });
	axios
		.post('http://localhost:5000/api/login', userCredential)
		.then((res) => {
			//localStorage.setItem('userToken', res.data.payload);
			dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload });
		})
		.catch((err) => {
			dispatch({ type: LOGIN_FAIL, payload: err.message });
		});
};

export const getFriends = () => (dispatch) => {
	dispatch({ type: FETCH_FRIENDS_START });
	axiosWithAuth()
		.get('http://localhost:5000/api/friends')
		.then((res) => dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: res.data }))
		.catch((err) => dispatch({ type: FETCH_FRIENDS_FAIL, payload: err.message }));
};

export const postFriend = (friend) => (dispatch) => {
	dispatch({ type: POST_FRIEND_START });
	axiosWithAuth()
		.post('http://localhost:5000/api/friends', friend)
		.then((res) => dispatch({ type: POST_FRIEND_SUCCESS, payload: res.data }))
		.catch((err) => dispatch({ type: POST_FRIEND_FAIL, payload: err }));
};
