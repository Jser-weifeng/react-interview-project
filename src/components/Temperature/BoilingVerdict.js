/**
 * Created by Echo on 2018/3/12.
 */
import React,{Component} from 'react';
export default class BoilingVerdict extends Component{
  render(){
    return (
      this.props.celsius>=100 ? <p>水会烧开</p> : <p>水不会烧开</p>
    )
  }
}