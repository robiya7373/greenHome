// Libs
import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

// Components
import { Header, Footer, MobileMenu } from '../components/imports';

function HeaderFooterLayout({ children }) {
    
  return (
    <div className="wrapper">
      <Header />
      {children}
      <Footer />
      <MobileMenu />
    </div>
  );
}

export default HeaderFooterLayout;
