// Libs
import React, {useEffect, useRef, useState} from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

// Styles
import './App.css';

// Pages
import {
  MainPage,
  ProductPage,
  AccountDetailSettings,
  BusketPage,
  BlogPage,
  ShopsPage,
  PlantCarePage
} from './pages/imports';

// Components
import { Cookie } from './components/imports';

// Hooks
import ScrollToTop from './hooks/ScrollToTop';

function App() {

  return(
    <React.Fragment>
    <Cookie />
    <BrowserRouter basename={'/GreenShop-site/'}  >
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={MainPage}/>
        <Route path="/product/:id" component={ProductPage}/>
        <Route path="/basket" component={BusketPage} />
        <Route path="/blog" component={BlogPage} />
        <Route path="/shops" component={ShopsPage} />
        <Route path="/plantcare" component={PlantCarePage} />
        <Route path="/user/settings/accountdetail" component={AccountDetailSettings} />
      </Switch>
    </BrowserRouter>
    </React.Fragment>
  )
}
export default App;
