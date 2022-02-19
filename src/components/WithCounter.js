import React from 'react'

const UpdatedComponent = (OriginalComponent) => {
    class NewComponent extends React.Component {
        constructor(props) {
            super(props)
          
            this.state = {
               count:0
            }
          }
          ClickCounter =()=>{
              this.setState( (prevstate) =>{
                  return { count: prevstate.count + 1 }
              })
          }
      
        render() {
            return <OriginalComponent name="Raubins"
            count={this.state.count}
            ClickCounter={this.ClickCounter}
            />
        }

    }
    return NewComponent

}

export default UpdatedComponent
