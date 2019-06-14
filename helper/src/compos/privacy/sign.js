import React from 'react';

class Sign extends React.Component {


  state={
    email:'',
    username:'',
    passcode:'',
  };

  change =(e)=> {
    this.setState({[e.target.name]:e.target.value})
  }

  Add =(e)=>{
    e.preventDefault()
    // this.setState({    
    //   username:'',
    //   passcode:'',
    // })
    this.props.addInfo(e,this.state)
    //  this.props.history.push('/login')

    console.log(e,this.state,this.props)
    //return <Redirect to="/login"  />
    
  }

  render(){
    return(
      <div className='register'>
        <form onSubmit={this.Add}>

        <h2>
        {this.state.username}
        </h2>
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
        name='passcode'
        placeholder='passcode'
        value={this.state.passcode}
        onChange={this.change}
        required/>

        <button>register</button>
        </form>
      </div>
    )
    }
}
 export default Sign ;

// const mapStateToProps = state =>{
//   return {
//     login:state
//   }
// }
//export default Sign;






