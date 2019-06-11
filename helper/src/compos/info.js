import React from 'react';

import Sign from './sign';
import Login from './login';


const info = [{username:'first',passcode:'pass',},]

class Info extends React.Component {
  constructor(){
    super()
    this.state ={
      info
    };
  }

  addInfo =(e,foo)=> {
    e.preventDefault()
    const newItem = {
      username:foo,
    };
    this.setState({info:[...info,newItem]})
  }
  render(){

    return (
      <div>

        <Sign 
        addInfo={this.addInfo}
        />

        <Login />
      </div>
    )
  }
}

export default Info ;