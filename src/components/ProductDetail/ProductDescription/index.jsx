import React from 'react';
import './style.css';

function ProductDescription({data}) {
  return (
    <div
      className="productDescription"
      dangerouslySetInnerHTML={{__html: data  }}
    />
  )
}

export default ProductDescription;
