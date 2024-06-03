import React from 'react';

// Layout
import { HeaderFooterLayout } from '../layouts/imports';

// Components
import {
  CurrentPage,
  ProductSlider,
  Busket,
} from '../components/imports';

function BusketPage() {
  return (
    <HeaderFooterLayout>
      <CurrentPage page={['Shop', 'Shopping Cart']} />
      <Busket />
      <ProductSlider propStyle={{margin: "50px 0"}} title="You may be interested in" />
    </HeaderFooterLayout>
  )
}

export default BusketPage;
