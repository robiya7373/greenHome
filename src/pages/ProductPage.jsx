import React from 'react';

// Layout
import { HeaderFooterLayout } from '../layouts/imports';

// Componentns
import {
  ProductsShortDescription,
  ProductDetail,
  ProductSlider,
  CurrentPage
} from '../components/imports'

function ProductPage() {
  return (
    <HeaderFooterLayout>
      <CurrentPage page={['Shop']} />
      <ProductsShortDescription propStile={{margin: '20px 0',}} />
      <ProductDetail propStyle={{margin: "20px 0"}} />
      <ProductSlider propStyle={{margin: "50px 0"}} title="Releted Products" />
    </HeaderFooterLayout>
  )
}

export default ProductPage;
