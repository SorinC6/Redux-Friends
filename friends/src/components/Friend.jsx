import React from 'react';
import styled from 'styled-components';

const WrapperDiv = styled.div`
   width: 200px;
   margin:10px;
	padding: 10px;
   border-style: double;
   text-align:center;
`;

const Friend = (props) => {
	const { name, age, email } = props.friend;
	return (
		<div>
			<WrapperDiv>
				<h2>{name}</h2>
				<p>{age}'s old</p>
				<p>{email}</p>
			</WrapperDiv>
		</div>
	);
};

export default Friend;
