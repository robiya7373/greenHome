import React from 'react';

// Layout
import { HeaderFooterLayout } from '../layouts/imports';

// Components
import {
  Slider,
  ProductsListFilter,
  ProductsListSorting,
  ProductsCardList,
  NewProducts,
  ShortBlog,
} from '../components/imports';

function MainPage() {
  return (
    <HeaderFooterLayout>
      <Slider propStile={{ marginTop: '20px', marginBottom: '40px' }} />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          columnGap: '50px',
        }}
      >
        <ProductsListFilter />

        <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <ProductsListSorting />
          <ProductsCardList />
        </div>
      </div>

      <NewProducts propStyle={{ margin: '100px 0' }} />
      <ShortBlog propStyle={{ marginBottom: '100px' }} />
    </HeaderFooterLayout>
  );
}

export default MainPage;
