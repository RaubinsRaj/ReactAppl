import React, { Component } from 'react'
import UpdatedComponent from './WithCounter'

class HoverCounter extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//         count:0
//      }
//    }
//    ClickCounter =()=>{
//        this.setState( (prevstate) =>{
//            return { count: prevstate.count + 1 }
//        })
//    } 
    
  render() {
    //   const {count}= this.state
    const {count,ClickCounter}= this.props

    return (
      <div>
          <h2 onMouseOver={ClickCounter}>Hover{count}times</h2>
      </div>
    )
  }
}

export default UpdatedComponent(HoverCounter)