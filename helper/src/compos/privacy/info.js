import React from 'react';


import { connect } from 'react-redux';
import getReg from '../actions';



// const info = [{username:'first',passcode:'pass',},]

class Info extends React.Component {
  constructor() {
    super()
    this.state = {

      username: '',
      password: '',
      email: '',

    };
  }

  Add = (e, creds) => {
    e.preventDefault()
    console.log(creds)
    this.props.getReg(this.state)
    this.setState({
      username: '',
      password: '',
      email: '',
    })

  }


  change = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }


  render() {
    return (
      <div>
        <form onSubmit={this.Add}>
          <input
            type='email'
            name='email'
            placeholder='email'
            value={this.state.email}
            onChange={this.change}
            required
          />
          <input
            type='text'
            name='username'
            placeholder='username'
            value={this.state.username}
            onChange={this.change}
            required
          />
          <input
            type='password'
            name='password'
            placeholder='password'
            value={this.state.password}
            onChange={this.change}
            required />

          <button onClick={this.Add}>register</button>
        </form>
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   return console.log(state)
// }

export default connect(null, { getReg })(Info) 