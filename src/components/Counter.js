import React, { Component } from 'react';

export class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          count: 0
         
      }
    }
    changeCounter(){
        // this.state.count= this.state.count++
        // console.log(this.state.count)
        // this.setState({
        //     count: this.state.count +1
        // },
        // ()=>{console.log("callback value",this.state.count)}
        // )
        this.setState((prvState)=>({
            count: prvState.count+1

        }))
        console.log("callback value",this.state.count)
    }

    changeCounterByfive(){
        this.changeCounter();
        this.changeCounter();
        this.changeCounter();
        this.changeCounter();
        this.changeCounter();
    }
    


  render() {
    return (
    <div>
        Count- {this.state.count}
        {/* <button onClick={()=> this.changeCounter()}>ClickMe</button> */}
        <button onClick={()=> this.changeCounterByfive()}>ClickMe</button>
    </div>
    )}
}

export default Counter;
