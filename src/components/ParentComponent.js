import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "Parent component"
      }
      this.greetParent= this.greetParent.bind(this);
      this.clickMethod= this.clickMethod.bind(this);
    }
    
    greetParent(childName){
        alert(`Hello ${this.state.message} from ${childName}`)
    }
    clickMethod(){
        this.setState({
            message: "Daddy Here"
        })
        alert(`Hi`)
    }


  render() {
    return (<div>
             {this.state.message}
        <button onClick={this.clickMethod}>ClickDude</button>
        <ChildComponent greetHandler={this.greetParent} name="Raubins" gfName= "Ankita"/>

    </div>)
  }
}

export default ParentComponent;
