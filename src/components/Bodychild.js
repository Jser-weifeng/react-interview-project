/**
 * Created by Echo on 2018/3/12.
 */
import React, {Component} from 'react';
export default class Bodychild extends Component{
  render(){
    return (
      <div>
        <input type="text" onChange={this.props.handleChange}/>
      </div>
    )
  }
}