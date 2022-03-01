import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

export class ComponentF extends Component {
  render() {
    return (
      <div>
          <UserConsumer>
              {
                  (user)=>{
                      return <div> Hello {user}</div>
                  }
              }
          </UserConsumer>
      </div>
    )
  }
}

export default ComponentF