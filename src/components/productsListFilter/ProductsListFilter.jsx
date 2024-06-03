// Libs
import React from 'react';

// Styles
import './productsListFilter.css';

// Configuration
import { filterConfig } from '../../configuration/filter.config';
import { sale } from '../../configuration/sale.config';

// Components
import ProductsPriceRange from './productsPriceRange/ProductsPriceRange';

function ProductsListFilter() {
  return (
    <div className="productsListFilter">
      <div className="productsLF__wrapper">
        {/* Categories */}
        <h1 className="productsLF__filter-title">
          {filterConfig.categories.name}
        </h1>
        <ul className="productsLF__filter-list">
          {filterConfig.categories.points.map((item, index) => (
            <li className="productsLF__filter-item" key={index}>
              <a className="productsLF__filter-link" href={item.path}>
                <span className="productsLF__filter-name">{item.name}</span>
                <span className="productsLF__filter-quantity">
                  {item.quantity}
                </span>
              </a>
            </li>
          ))}
        </ul>

        {/* Price Range */}
        <ProductsPriceRange />

        {/* Size */}
        <h1 className="productsLF__filter-title">{filterConfig.size.name}</h1>
        <ul className="productsLF__filter-list">
          {filterConfig.size.points.map((item, index) => (
            <li className="productsLF__filter-item" key={index}>
              <a className="productsLF__filter-link" href={item.path}>
                <span className="productsLF__filter-name">{item.name}</span>
                <span className="productsLF__filter-quantity">
                  {item.quantity}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="productsLF__ad">
        <a
          className="ad__link"
          href={sale.link}
          style={{ backgroundImage: `url('${sale.img}')` }}
        />
      </div>
    </div>
  );
}

export default ProductsListFilter;
