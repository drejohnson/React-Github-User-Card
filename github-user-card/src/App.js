import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import GlobalStyle from './style/Global';
import UserCard from './components/UserCard';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: 'drejohnson',
      data: null,
    };
  }

  async componentDidMount() {
    await this.fetchUser(this.state.user);
  }

  fetchUser = async user => {
    const result = await axios.get(`https://api.github.com/users/${user}`);
    this.setState({
      data: result.data,
    });
  };

  render() {
    return (
      <>
        <GlobalStyle />
        <div className='App'>
          <UserCard user={this.state.data} />
        </div>
      </>
    );
  }
}

export default App;
