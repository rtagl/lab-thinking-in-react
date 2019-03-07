import React, { Component } from 'react';
import { Data } from './data.json'
// import ProductTable from './ProductTable'
import SearchBar from './SearchBar'

class FilterableProductTable extends Component {

  state = {
    products: []
  }


  render() {
    return (
      <div>
        <h1>IronStore</h1>
      </div>
    )
  }

}


export default FilterableProductTable