import React, { Component } from 'react'
import "./App.css"
const numbers=[
  {
    number:0,
    id:"zero"
  },
  {
    number:1,
    id:"one"
  },
  {
    number:2,
    id:"two"
  },
  {
    number:3,
    id:"three"
  },
  {
    number:4,
    id:"four"
  },
  {
    number:5,
    id:"five"
  },
  {
    number:6,
    id:"six"
  },
  {
    number:7,
    id:"seven"
  },
  {
    number:8, 
    id: "eight"
  },
  {
    number:9,
    id:"nine"
  }
]
const op=
[
  {
    operator: "+",
    id: "add",
  },
  {
    operator: "-",
    id: "subtract",
  },
  {
    operator: "*",
    id:"multiply"
  },
  {
    operator: "/",
    id:"divide"
  }
]


export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       input:0
    }
  this.clear=this.clear.bind(this)
  }
  clear()
  {
    this.setState({input:0})
  }
  render() {
    return (
      <>


  
    
    <div className="App">
  
    <div className="btns">  
    <button id="equals">=</button>
     {numbers.map(x=><button key={x.id}   id={x.id}>{x.number}</button>)}
    {op.map(y=><button key={y.id} id={y.id}>{y.operator}</button>)}
    <button id="decimal">.</button>
    <button id="clear" onClick={this.clear}>Clear</button>
  
    <div id="display">{this.state.input}</div>
    </div>
    </div>


      </>
    )
  }
}

export default App