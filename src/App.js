import React, { Component } from 'react';
import './App.css';
import List from './component/courslist';
import Form from './component/coursfrom';
class App extends Component {
  state={
    courses:[
      {name:'html'},
      {name:'css'}
    ],
    current:''
  }
  update =(e)=>
  {
    this.setState({
      current:e.target.value
    })
  }
  add =(e)=>
  {
    e.preventDefault();
    let course=this.state.courses
    let current=this.state.current
    course.push({name:current})
    this.setState({
      course:course,
      current:''
    })
  }
  delete=(index)=>
  {
    let {courses}=this.state
    courses.splice(index,1)
    this.setState({
      courses
    })

  }
  edit=(index,value)=>
  {
    let {courses}=this.state;
    let course=courses[index];
    course['name']=value
    this.setState({
      courses
    })

  }
  render(){

    const {courses}=this.state;
    const courslist=courses.map((course,index)=>
    {
      return <List details={course} key={index} index={index} delete={this.delete} edit={this.edit} item={this.state.courses}/>
    })
  return (
    <div className="App">
      <h2>Add courses</h2>
     <Form update={this.update} add={this.add} curent={this.state.current}/>
     <ul>{courslist}</ul>
    </div>
  );}
}
export default App;
