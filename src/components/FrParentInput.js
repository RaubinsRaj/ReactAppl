import React, { Component } from 'react'
import FrInput from './FrInput'

class FrParentInput extends Component {

    constructor(props) {
      super(props)

    
      this.inputref= React.createRef();
    }
    clickhnadler=()=> {
        this.inputref.current.focus()

    }
    submitDetails=()=>{
        alert("Hey raubins")

    }

  render() {
    return (
      <div>
          <FrInput  ref={this.inputref}/>
          <button onClick={this.clickhnadler}>Focus</button>
          <button onClick={this.submitDetails}>Submit</button>
      </div>
    )
  }
}

export default FrParentInput