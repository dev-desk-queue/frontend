import React from 'react';

import Sign from './sign'

class Info extends React.Component {
  constructor(){
    super()
    this.state ={
      info
    };
  }
  addInfo =(e,info)=> {
    e.preventDefault()
    const newItem = {
      username:info
    };
    this.setState({info:[...info,newItem]})
  }
  render(){

    return (
      <div>
        <Sign 
        addInfo={this.Info}
        />
      </div>
    )
  }
}

export default Info ;