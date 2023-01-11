import React, { Component } from 'react'

export default class State extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count :0
      }
    }
    increase=()=>{
        // console.log('++')
        
       this.setState({
        count:this.state.count +1
       }) 
    }
    decrease=()=>{
        // console.log('--')
        this.setState({
         count:this.state.count -1
        }) 
     }


  render() {
    const {count}= this.state
    return (
      <div className='text-center'>
        <em className='btn'>Count :{count}</em>
        <button className='arabic' onClick={this.increase}>+</button>
        <button className='arabic ' onClick={this.decrease} disabled={count===0?true:false}>-</button>
      </div>
    )
  }
}

