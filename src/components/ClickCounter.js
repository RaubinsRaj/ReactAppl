import React, { Component } from 'react'
import UpdatedComponent from './WithCounter'

export class ClickCounter extends Component {
    // constructor(props) {
    //   super(props)
    
    //   this.state = {
    //      count:0
    //   }
    // }
    // ClickCounter =()=>{
    //     this.setState( (prevstate) =>{
    //         return { count: prevstate.count + 1 }
    //     })
    // }


  render() {
    // const {count} = this.state
    const {name,count,ClickCounter} = this.props
    return (

          <div>
          {/* <button onClick={this.ClickCounter}>{this.props.name}Click {this.state.count} times</button> */}
          <button onClick={ClickCounter}>{name}Click {count} times</button>
      </div>
    )
  }
}

// export default ClickCounter
export default UpdatedComponent(ClickCounter)