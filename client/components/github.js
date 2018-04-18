import React, {Component} from 'react'

class GitHub extends Component {
  state = {
    user: null,
    avatar: null,
    userInput: null
  }

  componentDidMount(){
    console.log(this.state)
  }

  getUser = (event) => {
    event.preventDefault()
    let username = this.state.userInput
    return fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(response => {
      return response
    })
    .then(user => {
      this.setState({
        user: user.login,
        avatar: user.avatar_url
      })
    })
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
          <input onChange={this.handleInput} type="text" />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default GitHub
