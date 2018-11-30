import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      friends: [],
      picture: '',
      name: ''
    }
    this.updateName = this.updateName.bind(this);
    this.updatePicture = this.updatePicture.bind(this);
    this.addFriend = this.addFriend.bind(this);
  }
  updatePicture(e) {
    this.setState({picture: e.target.value});
  }
  updateName(e) {
    this.setState({name: e.target.value})
  }
  addFriend() {
    const {friends, picture, name} = this.state;

    let updatedFriends = [...friends];
    updatedFriends.push({picture, name});

    this.setState({friends: updatedFriends});
  }
  render() {
    const friends = this.state.friends.map( ( friend, index ) => (
      <div key={ `friend-${ index }-${ friend.name }` }>
        <img width="100px" src={ friend.picture } />
        <span>{ friend.name }</span>
      </div>
    ))
    return (
      <div>
        Picture:<input type="text" onChange={this.updatePicture} />Name:<input type="text" onChange={this.updateName} /><button onClick={this.addFriend}>Add Friend</button>
        {friends}
      </div>
    );
  }
}

export default App;
