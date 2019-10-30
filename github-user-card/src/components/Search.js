import React from 'react';
import styled from 'styled-components/macro';

const Wrapper = styled.div`
  display: flex;
  padding: 0 1rem;
`;

const CardInput = styled.input`
  padding: 7px 0;
  font-family: inherit;
  font-size: 14px;
  width: 100%;
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid #ddd;
  border-left: 0;
  transition: border-bottom-color 0.25s ease-in;
  &:focus {
    border-bottom-color: #e5195f;
    outline: 0;
  }
`;

const CardButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  padding: 0.875rem 0;
  margin: 1rem 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background-color: #e5195f;
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`;

function Search({ handleChange, fetchUser, user }) {
  return (
    <Wrapper>
      <CardInput type='text' onChange={handleChange} value={user} />
      <CardButton onClick={() => fetchUser(user)}>Search</CardButton>
    </Wrapper>
  );
}

export default Search;
