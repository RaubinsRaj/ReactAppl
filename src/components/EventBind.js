import React, { Component } from 'react';

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "Hello"
      }
    //   this.messageChanger= this.messageChanger.bind(this);
    }

    // messageChanger() {
    //     this.setState({
    //         message: "Hey There"
    //     })
    // }

    messageChanger = ()=> {
        this.setState({
            message:" GoodBye"
        })

    }
    


  render() {
    return (
    <div>
        {this.state.message}
        {/* <button onClick={this.messageChanger.bind(this)}> clickMe</button> */}
        {/* <button onClick={()=>this.messageChanger()}> clickMe</button> */}
        <button onClick={this.messageChanger}> clickMe</button>

    </div>
  )}
}

export default EventBind;
