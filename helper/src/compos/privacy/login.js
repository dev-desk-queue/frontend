import React, { Component } from 'react' ;

import { connect } from 'react-redux';

import getLogin from '../actions'

class Login extends Component {

  state = {
    creds: {
      username: 'ad',
      password: 'pass'
    }
  }


  handleChange = e => {
    this.setState({
      creds: {
        ...this.state.creds,
        [e.target.name]: e.target.value
      }
    });
  }

  login = e => {
    e.preventDefault();
    this.props.login(this.state.creds)
      .then((id) => {
        console.log('Login Successful', id)
        if (id) {
          this.props.history.push('/protected')
        } else {
          alert('No User Found')
          this.props.history.push('/login')
        }
      })
  }

  render() {
    console.log(this.state.creds)
    return (
      <div className='loginWrapper'>
        <form onSubmit={this.login}>
          <input
            input='text'
            name='username'
            placeholder='username'
            value={this.state.username}
            onChange={this.handleChange}
            required
          />
          <input
            input='text'
            name='password'
            placeholder='password'
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <button>login</button>
        </form>


      </div>
    )
  }
}

const mapStateToProps = ({error, grabData}) => ({
  error,
  grabData
})

export default connect(mapStateToProps,{getLogin})(Login) 
