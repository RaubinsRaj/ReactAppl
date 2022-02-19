import React, { Component } from 'react';

 class ClickHandle extends Component {
    ClickHandler(){
        console.log("Button Clicked in class ")
    }


  render() {
    return (<div>
        <button onClick={this.ClickHandler}>ClickMe</button>
    </div>
    )}
}

export default ClickHandle;
