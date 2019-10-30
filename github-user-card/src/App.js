import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components/macro';
import logo from './logo.svg';
import GlobalStyle from './style/Global';
import UserCard from './components/UserCard';
import Search from './components/Search';

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
    await this.fetchFollowers(this.state.user);
    await this.fetchUser(this.state.user);
  }

  fetchUser = async user => {
    const result = await axios.get(
      `https://api.github.com/users/${user || this.state.user}`,
    );
    this.setState({
      data: await result.data,
    });
    return result.data;
  };

  fetchFollowers = async user => {
    const result = await axios.get(
      `https://api.github.com/users/${user || this.state.user}/followers`,
    );
    return result.data.map(follower => {
      return this.fetchUser(follower.login).then(user => {
        this.setState({
          followers: this.state.followers.concat(user),
        });
      });
    });
  };

  handleChange = e => {
    this.setState({
      user: e.target.value,
    });
  };

  render() {
    return (
      <>
        <GlobalStyle />
        <div className='App'>
          <Search
            user={this.user}
            fetchUser={this.fetchUser}
            handleChange={this.handleChange}
          />
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
