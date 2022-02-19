import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           username: '',
           comments: '',
           topic: 'react'
        }
      }

      changeHandler =  (event) => {
         this.setState({
             username: event.target.value
         })
      }
      changeComments =(event) =>{
          this.setState({
              comments: event.target.value
          })

      }
      changeTopics = (event) => {
          this.setState({
              topic: event.target.value
          })

      }
      handleSubmit = (event)=>{
          alert(`Hey ${this.state.username} ${this.state.comments} ${this.state.topic}`)
          event.preventDefault()

      }

  render() {

    return (
      <div>
          <form onSubmit={this.handleSubmit}> 
            <div>
                <label>username</label>
                <input type= 'text'
                value= {this.state.username}
                onChange={this.changeHandler}
                
                />
            </div>
            <div>
                <label>comments</label>
                <textarea 
                value=  {this.state.comments}
                onChange={this.changeComments}
                />
            </div>
            <div>
                <select value={this.state.topic}
                onChange={this.changeTopics}
                
                >
                    <option value= "React" >React</option>
                    <option value= "Angular" >Angular</option>
                    <option value= "Vue" >Vue</option>
                </select>
            </div>
            <div>
                <button type='submit' >Submit</button>
            </div>
          </form>
      </div>
    )
  }
}

export default Form;