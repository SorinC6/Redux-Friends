import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getFriends } from '../actions/index';

const FriendsList = (props) => {
	useEffect(() => {
		props.getFriends();
	});
	console.log(props);
	return <div>{props.friends.map((friend) => <p>{friend.name}</p>)}</div>;
};

const mapStateToProps = (state) => {
	return {
		friends: state.friendsReducer.friends,
		isLoading: state.friendsReducer.isLoading,
		error: state.friendsReducer.error
	};
};

export default connect(mapStateToProps, { getFriends })(FriendsList);
