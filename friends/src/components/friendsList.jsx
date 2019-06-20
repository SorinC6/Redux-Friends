import React, { useEffect } from 'react';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';
import { getFriends, deleteFriend } from '../actions/index';
import Friend from './Friend';
import styled from 'styled-components';

const WrapperDiv = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

class FriendsList extends React.Component {
	componentDidMount() {
		this.props.getFriends();
		//this.props.login();
	}

	deleteFriend = (id) => {
		//console.log(id);
		this.props.deleteFriend(id);
		//this.props.getFriends();
	};

	render() {
		console.log(this.props);
		return (
			<WrapperDiv>
				{this.props.isLoading && <Loader type="TailSpin" color="#00BFFF" height="200" width="200" />}
				{this.props.error && <h3>{this.props.error}</h3>}
				{this.props.friends.map((friend) => {
					return <Friend key={friend.id} friend={friend} deleteFriend={this.deleteFriend} />;
				})}
			</WrapperDiv>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		friends: state.friendsReducer.friends,
		isLoading: state.friendsReducer.isLoading,
		error: state.friendsReducer.error
	};
};

export default connect(mapStateToProps, { getFriends, deleteFriend })(FriendsList);
