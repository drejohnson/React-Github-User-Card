import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components/macro';
import logo from './logo.svg';
import GlobalStyle from './style/Global';
import UserCard from './components/UserCard';

const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 1rem;
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: 'drejohnson',
      data: null,
      followers: [],
    };
  }

  async componentDidMount() {
    const followers = await this.fetchFollowers(this.state.user);
    this.setState({
      data: await this.fetchUser(this.state.user),
    });
    this.setState({
      followers: await this.fetchFollowers(this.state.user),
    });
    followers.map(user =>
      this.fetchUser(user).then(x => {
        this.setState({
          followers: this.state.followers.concat(x),
        });
      }),
    );
  }

  fetchUser = async user => {
    const result = await axios.get(`https://api.github.com/users/${user}`);
    return await result.data;
  };

  fetchFollowers = async user => {
    const result = await axios.get(
      `https://api.github.com/users/${user}/followers`,
    );
    return result.data.map(follower => {
      return follower.login;
    });
  };

  render() {
    return (
      <>
        <GlobalStyle />
        <div className='App'>
          <UserCard user={this.state.data} />
          <CardList>
            {this.state.followers.map(follower => {
              return follower.avatar_url &&
                follower.location &&
                follower.bio ? (
                <UserCard key={follower.name} user={follower} />
              ) : null;
            })}
          </CardList>
        </div>
      </>
    );
  }
}

export default App;
