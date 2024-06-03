import React from 'react'

import Previewer from './previewer/index'
import Manage from './manage/index'

import './style.css'

function ProductsShortDescription({propStile}) {
  return (
    <div className="productsShortDescription" style={propStile}>
      <Previewer />
      <Manage />
    </div>
  );
}

export default ProductsShortDescription;
