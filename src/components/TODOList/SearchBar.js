/**
 * Created by Echo on 2018/3/13.
 */
import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props){
    super(props)
    this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
    this.handleInStockOnlyChange = this.handleInStockOnlyChange.bind(this);
  }
  handleFilterTextInput(event){
    this.props.onFilterTextInput(event.target.value)
  }
  handleInStockOnlyChange(event){
    this.props.onInStockOnlyChange(event.target.checked)
  }
  render() {
    return (
      <div>
        <input type="text" value={this.props.filterText} onChange={this.handleFilterTextInput}/>
        <input type="checkbox" name="aa" value={this.props.inStockOnly} onChange={this.handleInStockOnlyChange}/><label htmlFor="aa">Only show products in stock</label>
      </div>
    );
  }
}