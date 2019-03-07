import React from 'react';

const Friend = (props) => {
	const { name, age, email } = props.friend;
	return (
		<div>
			<div>
				<h2>{name}</h2>
				<p>{age}'s old</p>
				<p>{email}</p>
			</div>
		</div>
	);
};

export default Friend;
