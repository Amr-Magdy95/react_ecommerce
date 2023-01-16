import React from 'react'
import {useFilterContext} from '../context/filter_context';
import GridView from './GridView';
import ListView from './ListView';

function ProductList() {
  const {filtered_products: products} = useFilterContext();
  return (
    <GridView products={products} />
  )
}

export default ProductList