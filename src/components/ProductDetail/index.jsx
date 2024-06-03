import React, {useState} from 'react';
import './style.css';

import ProductDescription from './ProductDescription/index'
import { markdown } from '../../configuration/detail.config.js'

function ProductDetail({propStyle}) {

  const [isDescription, setDescription] = useState(true)

  return (
    <div className="productdetail" style={propStyle}>

      <div className="productdetail__navbar">
        <ul className="productdetail__list" >
          <li className="productdetail__item productdetail__item_active">Product Description</li>
          <li className="productdetail__item">Reviews (19)</li>
        </ul>
      </div>

      <div className="productdetail__content">
          <ProductDescription data={markdown} />
      </div>

    </div>
  )
}

export default ProductDetail;
