import React from 'react';
import styled from 'styled-components/macro';

const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 1.5rem;
  margin: 1rem 0;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  overflow: hidden;
`;

const CardImg = styled.img`
  width: 40%;
  max-width: 300px;
  border-radius: 50%;
`;

const CardInfo = styled.div`
  width: 50%;
`;

const UserCard = ({ user }) => {
  return (
    <Card>
      {user && (
        <>
          <CardImg src={user.avatar_url} alt={user.name} />
          <CardInfo>
            <h2>{user.name}</h2>
            <p>Location: {user.location}</p>
            <p>Bio: {user.bio}</p>
          </CardInfo>
        </>
      )}
    </Card>
  );
};

export default UserCard;
