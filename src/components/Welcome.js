import React, { Component } from 'react';

export class Welcome extends Component {
  render(props) {
      const {name,heroName} =this.props
    return (
    <div>
     <h1>Welcome {name} </h1>
    </div>
    )}
}

export default Welcome;
