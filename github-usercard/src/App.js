import React from 'react';
import axios from 'axios';

import UserCard from './components/UserCard';
import Followers from './components/Followers';
import Form from './components/Form';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'jscheuble',
      user: {},
      followers: []
    }
  }

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/${this.state.name}`)
      .then(res => {
        console.log(res.data)
        this.setState({
          user: res.data
        })
      })
      .catch(err => console.log(err))
    axios
      .get(`https://api.github.com/users/${this.state.name}/followers`)
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

  handleChange = e => {
    this.setState({
      name: e.target.value
    });
  }

  fetchUser = e => {
    e.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <Form handleChange={this.handleChange} name={this.state.name}/>
        <UserCard user={this.state.user} />
        <Followers followers={this.state.followers}/>
      </div>
    );
  }
}

export default App;
