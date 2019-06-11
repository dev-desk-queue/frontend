import React from 'react';


class Sign extends React.Component {
  // constructor(){
  //   super()
  //   this.state = {
  //     username:"",
  //   }
  // }

  state={
    username:'',
    // passcode:'',
  };

  change =(e)=> {
    this.setState({[e.target.name]:e.target.value})
  }

  Add =(e)=>{
    e.preventDefault()
    this.setState({    
      username:'',
      //passcode:'',
    })
    this.props.addInfo(e,this.state.username);
  }

  render(){
    return(
      <div className='register'>
        <h2>
        {this.state.username}
        </h2>
          
        <input
        type='text'
        name='username'
        placeholder='username'
        value={this.state.username}
        onChange={this.change}
        />
        <input 
        type='password'
        name='passcode'
        placeholder='passcode'
        value={this.state.passcode}
        onChange={this.change}/>
        <button onClick={this.Add}>register</button>
      </div>
    )
    }
}

export default Sign ;







