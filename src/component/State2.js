import React, { Component } from 'react'

export default class State2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    increse=()=>{
      this.setState({
        count:this.state.count+1
      })
    }
    decrese=()=>{
      this.setState({
        count:this.state.count-1
      })
    }

  render() {
    let {count} = this.state
    return (
      <div>
        <h1>Count :{count}</h1>
      <button onClick={this.increse}>+</button>
      <button onClick={this.decrese} disabled={count===0?true:false}>-</button>
      

      </div>
    )
  }
}
