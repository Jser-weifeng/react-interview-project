/**
 * Created by Echo on 2018/3/13.
 */
import React, { Component } from 'react';
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

export default class FilterableProductTable extends Component {
  constructor(props){
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false
    }
    this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
    this.handleInStockOnlyChange = this.handleInStockOnlyChange.bind(this);
  }
  handleFilterTextInput(filterText){
    this.setState({
      filterText: filterText
    })
  }
  handleInStockOnlyChange(inStockOnly){
    this.setState({
      inStockOnly: inStockOnly
    })
  }
  render() {
    return (
      <div style={{width:'500px', margin: '0 auto'}}>
        <SearchBar
          inStockOnly={this.state.inStockOnly}
          filterText={this.state.filterText}
          onFilterTextInput={this.handleFilterTextInput}
          onInStockOnlyChange={this.handleInStockOnlyChange}/>
        <ProductTable products={PRODUCTS} inStockOnly={this.state.inStockOnly} filterText={this.state.filterText}/>
      </div>
    );
  }
}
var PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];