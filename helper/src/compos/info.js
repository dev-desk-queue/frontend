import React from 'react';

import Sign from './sign'

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
        {console.log(this.state.info)}
        <Sign 
        addInfo={this.addInfo}
        />
      </div>
    )
  }
}

export default Info ;