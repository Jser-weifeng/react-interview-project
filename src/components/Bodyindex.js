/**
 * Created by Echo on 2018/3/9.
 */
import React, {Component} from 'react';
import Bodychild from "./Bodychild";
export default class Bodyindex extends Component{
  constructor(){
    super();
    this.state = {
      username: 'gx',
      age: 29
    }
  }
  // handleClick=()=>{
  //   this.setState({
  //     age: 50
  //   })
  // }
  handleClick(e){
    console.log(e.target);
    this.setState({
      age: 100
    })
  }
  handleChange = (event) => {
    this.setState({
      age: event.target.value
    })
  }
  render(){
    return (
      <div style={{padding:'20px'}}>
        <p>NAME: {this.state.username}</p>
        <p>AGE: {this.state.age}</p>
        <input type="button" onClick={e=>this.handleClick(e)} value="提交"/>
        <p>{this.props.username}</p>
        <Bodychild handleChange = {e=>this.handleChange(e)}/>
      </div>
    )
  }
}
