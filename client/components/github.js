import React, {Component} from 'react'

class GitHub extends Component {
  state = {
    user: null,
    avatar: null,
    userInput: ''
  }

  getUser = (event) => {
    event.preventDefault()
    let username = this.state.userInput
    return fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(response => {
      console.log(response)
      return response
    })
    .then(user => {
      this.setState({
        user: user.login,
        avatar: user.avatar_url,
        userInput: ''
      })
      this.getRepos()
    })
  }

  getRepos(){
    let username = this.state.user
    if (username){
      return fetch(`https://api.github.com/users/${username}/repos`)
      .then(response => response.json())
      .then(response => {
        console.log(response)
        return response
      })
    } else {
      console.log('there was a problem: ', this.state)
    }
  }

  handleInput = event => {
    event.preventDefault();
    this.setState({
      userInput: event.target.value
    })
  }

  render(){
    return (
      <div>
        <div>Hi</div>
        <div>{this.state.user}</div>
        <img src={this.state.avatar} />
        <form onSubmit={this.getUser}>
          <input value={this.state.userInput} onChange={this.handleInput} type="text" />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default GitHub
