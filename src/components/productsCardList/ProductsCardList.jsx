// Libs
import React, { useState } from 'react';

// Styles
import './productsCardList.css';

// Config
import { productsList } from '../../configuration/withoutApi';

// Components
import Card from '../productsCard/ProductsCard';
import ProductsPagination from '../productsPagination/ProductsPagination';

// Init react-scroll

function ProductsCardList() {
  // Pagination
  const [currentSlde, setCurrentSlide] = useState(1);

  const amountCard = productsList.length;
  const maxCardsOnOneSlide = 9;
  const amountSlides = (() => {
    if (amountCard % maxCardsOnOneSlide === 0) {
      return Math.floor(amountCard / maxCardsOnOneSlide);
    }
    return Math.floor(amountCard / maxCardsOnOneSlide) + 1;
  })();
  const lastCard = currentSlde * maxCardsOnOneSlide;
  const firstCard = lastCard - maxCardsOnOneSlide;
  const cardsOnThisSlide = productsList.slice(firstCard, lastCard);

  return (
    <div className="productsList">
      <ul className="productsCL">
        {cardsOnThisSlide.map((item) => (
          <Card data={item} key={item.id} />
        ))}
      </ul>
      <ProductsPagination
        amountSlides={amountSlides}
        changeSlide={(num) => {
          setCurrentSlide(num);
        }}
        currentSlide={currentSlde}
      />
    </div>
  );
}

export default ProductsCardList;
