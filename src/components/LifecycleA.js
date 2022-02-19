import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name:"Raubins"
      }
      console.log("Inside constructor A");
    }

    static getDerivedStateFromProps(props,state){
        console.log("Inside getDerivedStateFromProps() A");
      return null;
    }

    componentDidMount(){
        console.log("Inside componentDidMount() A");
    }

      render() {
          console.log("Inside render A")
    return (
        <div>
      <div>LifecycleA</div>
      <div>
      <LifecycleB />
      </div>
      </div>
    )
  }
}

export default LifecycleA