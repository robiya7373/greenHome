import React from 'react';

// Layout
import { HeaderFooterLayout } from '../layouts/imports';

// components
import { Map, CurrentPage, OrderInfo } from '../components/imports';

function ShopsPage() {
  return(
    <HeaderFooterLayout>
      <CurrentPage page={['shops']} />
      <Map propStyle={{margin: '20px 0', position: 'relative', zIndex: 1}} />
      <OrderInfo propStyle={{margin: '50px 0'}} />
    </HeaderFooterLayout>
  )
}

export default ShopsPage;
