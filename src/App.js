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
       input:"0",
      
       isDec:false
    }
  this.clear=this.clear.bind(this)
  this.handleClick=this.handleClick.bind(this)
  this.calculate=this.calculate.bind(this)
  this.handleDecimal=this.handleDecimal.bind(this)
  }

  handleClick(e)
  {
    if(this.state.input==="0")
    {this.setState({input:e.target.textContent})}
 else {
  this.setState({input:this.state.input+(e.target.textContent)})
 }
  }
  clear()
  {
    this.setState({input:"0"})
  }
  calculate()
  {
    this.setState({input:eval(this.state.input)})
    
  }
  handleDecimal()
  {
    const arr=this.state.input.split(" ")
    const lastElement = arr[arr.length - 1]
    if (!lastElement.includes('.') )
    {
      this.setState({input:this.state.input + '.'})
    }
  }
  render() {
    return (
      <>


  
    
    <div className="App">
  
    <div className="btns">  
     {op.map(y=><button key={y.id} onClick={this.handleClick} value={y.operator} id={y.id}>{y.operator}</button>)}
     {numbers.map(x=><button key={x.id} onClick={this.handleClick} value={x.number}  id={x.id}>{x.number}</button>)}
           
    <button id="decimal" onClick={this.handleDecimal}>.</button>
    <button id="clear" onClick={this.clear}>Clear</button>
  <button id="equals" onClick={this.calculate}>=</button>
    <div id="display" >{this.state.input} </div>
    </div>
    </div>


      </>
    )
  }
}

export default App