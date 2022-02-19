import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
      super(props)
    this.inputref = React.createRef();
    this.cbref= null

    this.setcbref= (element) => {
        this.cbref = element
    }
    }



    componentDidMount(){
        if(this.cbref){
        this.cbref.focus()
        }
        // this.inputref.current.focus();
        // console.log(this.inputref)
    }
    handleChange =()=>{
        alert(this.inputref.current.value)
    }


  render() {
    return (<>
      <div>refsDemo</div>
      <input type='text' ref={this.inputref} />
      <input type='text' ref={this.setcbref} />
      <button onClick={this.handleChange}>Click</button>
      </>
    )
  }
}

export default RefsDemo