import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name:"Raubins"
      }
      console.log("Inside constructor B");
    }

    static getDerivedStateFromProps(props,state){
        console.log("Inside getDerivedStateFromProps() B");
      return null;
    }

    componentDidMount(){
        console.log("Inside componentDidMount() B");
    }

      render() {
          console.log("Inside render B")
    return (
        <div>
      <div>LifecycleB</div>
      <div>
      </div>
      </div>
    )
  }
}

export default LifecycleB