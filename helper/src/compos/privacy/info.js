import React from 'react';

import Sign from './sign';
import {connect} from 'react-redux';
import getReg from '../actions';

import axios from 'axios';
import { Route, Redirect, withRouter } from "react-router-dom";



const info = [{username:'first',passcode:'pass',},]

class Info extends React.Component {
  constructor(){
    super()
    this.state ={
      info
    };
  }

  addInfo =(e,creds)=> {
    e.preventDefault()
    const newItem = {
      username:creds.username,
      passcode:creds.passcode
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

// export default Info ;



export default connect(null,{getReg})(Info) 
