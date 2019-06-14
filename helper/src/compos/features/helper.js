import React, {} from 'react';
import '../App.css';



class Helper extends React.Component {
  constructor(){
    super()
    this.state = {
      off_topic:[{name:'j',q:'help'},{name:'ko',q:'ok'}],
      questions:[],
      answered:[],
    }
  }

  touch =(i)=> {
    this.setState({})
  }

  render(){
    return (
      <div className='helper_page'>
        
      </div>
    )
  }
}

export default Helper ;