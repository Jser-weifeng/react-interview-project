/**
 * Created by Echo on 2018/3/12.
 */
import React, { Component } from 'react';

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheiy"
}
export default class TemperatureInput extends Component {
  constructor(props){
    super(props);
    // this.state = {
    //   temperature: ''
    // }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){
    // this.setState({
    //   temperature: event.target.value
    // })
    this.props.onTemperatureChange(event.target.value);
  }
  render() {
    return (
      <fieldset>
        <legend>输入一个{scaleNames[this.props.scale]}温度</legend>
        <input type="text" value={this.props.temperature} onChange={this.handleChange}/>
      </fieldset>
    );
  }
}