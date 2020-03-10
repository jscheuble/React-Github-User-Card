import React from 'react';
import axios from 'axios';

import UserCard from './components/UserCard';
import Followers from './components/Followers';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      followers: []
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
    axios
      .get('https://api.github.com/users/jscheuble/followers')
      .then(res => {
        console.log(res.data)
        res.data.forEach(user => {
          axios.get(user.url)
            .then(res => {
              console.log(res.data)
              this.setState({
                followers: [...this.state.followers, res.data]
              })
            })
            .catch(err => console.log(err))
        })
      })
      .catch(err => console.log(err))
  }
  render() {
    return (
      <div className="App">
        <UserCard user={this.state.user} />
        <Followers followers={this.state.followers}/>
      </div>
    );
  }
}

export default App;
