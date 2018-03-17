/**
 * Created by Echo on 2018/3/13.
 */
import React, { Component } from 'react';
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

export default class ProductTable extends Component {
  constructor(props){
    super(props);
  }
  render() {
    var row = [];
    var category = '';
    console.log(this.props);
    this.props.products.forEach((product)=>{
      if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
        return;
      }
      if(product.category !== category){
        row.push(<ProductCategoryRow category={product.category} key={product.category}/>)
      }
      row.push(<ProductRow product={product} key={product.name}/>);
      category = product.category;
    })
    return (
      <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
        </thead>
        <tbody>{row}</tbody>
      </table>
    );
  }
}