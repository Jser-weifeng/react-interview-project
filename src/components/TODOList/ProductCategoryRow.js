/**
 * Created by Echo on 2018/3/13.
 */
import React, { Component } from 'react';

export default class ProductCategoryRow extends Component {
  render() {
    return (
      <tr>
        <td colSpan={2}>{this.props.category}</td>
      </tr>
    );
  }
}