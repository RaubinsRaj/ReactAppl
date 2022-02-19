import React, { Component } from 'react'

class User extends Component {
  render() {
    return (
    <div>
      {/* <div>Hi {this.props.name}</div>
     <div>Hi {this.props.name()}</div> */}
     {/* <div>Hi {this.props.name(true)}</div> */}
     <div>Hi {this.props.render(false)}</div>
    </div>
    )
  }
}

export default User