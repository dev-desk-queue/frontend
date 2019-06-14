import React, { } from 'react';
import '../../App.css';



class Helper extends React.Component {
  constructor() {
    super()
    this.state = {
      off_topic: [],
      questions: '',
      answered: [],
    }
  }

  change = (e) => {
    e.preventDefault()
    this.setState({ questions: e.target.value })
  }

  ask = (i) => {
    i.preventDefault()

    console.log('click')
    this.setState({})
  }

  render() {
    return (
      <div className='helper_page'>
        <p>{this.state.questions}</p>
        <input
          name='single'
          placeholder='question'
          value={this.state.questions}
          onChange={this.change}
          required />
        <button onClick={this.ask}>enter</button>
      </div>
    )
  }
}

export default Helper;