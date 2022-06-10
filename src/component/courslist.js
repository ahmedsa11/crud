import React, { Component } from 'react';
class List extends Component {
  state={
    isedit:false,
  }

 rendercourse=()=>
 {
   return(
    <React.Fragment>
    <li><span>{this.props.details.name}</span>
    <button onClick={()=>{this.toggel()}}>edit</button>
    <button onClick={()=>{this.props.delete(this.props.index)}}>delete courses</button></li>
    </React.Fragment>
   )
 }
 toggel=()=>
 {
   let {isedit}=this.state
   this.setState({
     isedit:!isedit
   })
 }
 updateitem=(e)=>
 {
   e.preventDefault();
   this.props.edit(this.props.index,this.input.value);
   this.toggel();
   
 }
 formcoure=()=>
 {
   return(
     <form onSubmit={this.updateitem}>
       <input type="text" ref={(v)=>{this.input=v}} defaultValue={this.props.details.name}/>
       <button>update</button>
     </form>
   )
 }
  render(){
    let {isedit}=this.state
  return (
    <React.Fragment>
 {isedit ? this.formcoure(): this.rendercourse()}
    </React.Fragment>
  );}
}

export default List;
