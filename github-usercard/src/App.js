import React from 'react';
import axios from 'axios';

import UserCard from './components/UserCard';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    axios
      .get('https://api.github.com/users/jscheuble')
      .then(res => {
        console.log(res.data)
        this.setState({
          user: res.data
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <UserCard user={this.state.user} />
      </div>
    );
  }
}

export default App;
