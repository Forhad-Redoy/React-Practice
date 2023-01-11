import React, { Component } from 'react'

export default class Onchange extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         changedValue:""
      }
    }
    onChange=(e)=>{
        this.setState({
            changedValue:e.target.value
        })
    }
  render() {
    let {changedValue}=this.state
    return (
      <div>
        <input className='border-red-500 border text-red-600' type="text" onChange={this.onChange} />
        <p className='text-blue-500'>{changedValue}</p>
      </div>
    )
  }
}

