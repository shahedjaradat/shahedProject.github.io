import React,{Component} from 'react'
import Person from './Person/Person'
class App extends Component {
 state ={
  persons:[
    {name:'shahed',age:21 ,id:'010'},
    {name:'raghad' ,age:18 ,id:'020'},
    {name:'wafaa',age:24,id:'030'}
  ],
  showPerson:false
 }

 switchNameHandler=(newName)=>{
  this.setState((prevState) => ({
    persons: [
      { name: newName, age: 21, id: '010' },
      ...prevState.persons.slice(1),
    ]}))
   }
 
 togglerPersonHandler =()=>{
    
  this.setState({showPerson:!this.state.showPerson});

} 
   
render() {
const buttonStyle ={
  backgroundColor:'green',
  color :'black',
  textAlign:'center',
  padding:'5px',
  position: 'absolute',
  cursor:'pointer',
  top: '10%',
  left: '42%'
}
const personStyle={
  textAlign:'center',
  backgroundColor:'lightgrey',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  border: '1px solid #ccc',
  padding: '20px',
  width: '40%',
  position: 'absolute',
  top: '25%',
  left: '25%'
}

const persons = this.state.persons.map((person, index) => (
  <Person key={person.id} name={person.name} age={person.age} />
));
  return (
   <div className="App">
     <form>
  <h1>Hi I'm React App </h1>
  
  <button style={buttonStyle} onClick={this.togglerPersonHandler}>Switch Name</button>
 
 { this.state.showPerson ? 
 (<div style={personStyle}>
{this.state.showPerson ? (
  <div style={personStyle}>{persons}</div>
) : null}

 </div>):null}
 </form>
    </div>);
 
  
}
}
export default App;