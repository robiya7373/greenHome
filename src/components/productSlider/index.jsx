import React, { useState } from 'react';
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from "keen-slider/react"

import './style.css'

import ProductsCard from '../productsCard/ProductsCard.jsx';
import {testcards} from '../../configuration/productslider.config.js';

function ProductSlider({propStyle, title}) {

  const [sliderRef, instanceRef] = useKeenSlider({
   loop: true,
   slides: {
     perView: 4,
     spacing: 15,
   },

   breakpoints: {
    '(max-width: 1150px)': {
      slides: {
        perView: 3,
        spacing: 15,
      },
    },
    '(max-width: 900px)': {
      slides: {
        perView: 2,
        spacing: 15,
      },
    },
    '(max-width: 600px)': {
      slides: {
        perView: 1,
        spacing: 15,
      },
    },
  },
},
[
  (slider) => {
    let timeout;
    let mouseOver = false;
    function clearNextTimeout() {
      clearTimeout(timeout);
    }
    function nextTimeout() {
      clearTimeout(timeout);
      if (mouseOver) return;
      timeout = setTimeout(() => {
        slider.next();
      }, 3000);
    }
    slider.on('created', () => {
      slider.container.addEventListener('mouseover', () => {
        mouseOver = true;
        clearNextTimeout();
      });
      slider.container.addEventListener('mouseout', () => {
        mouseOver = false;
        nextTimeout();
      });
      nextTimeout();
    });
    slider.on('dragStarted', clearNextTimeout);
    slider.on('animationEnded', nextTimeout);
    slider.on('updated', nextTimeout);
  },
])

  return (
    <div className="productSlider" style={propStyle}>
      <header className="productSlider__header" >
        <h1 className="productSlider__title">{title}</h1>
      </header>
        <div ref={sliderRef} className="keen-slider" >
              {testcards.map( item => (
                <div className="keen-slider__slide" key={item.id}>
                  <ProductsCard data={item} />
                </div>
              ) )}
        </div>
    </div>
  )
}

export default ProductSlider;
