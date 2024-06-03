import React from 'react';

import {HeaderFooterLayout} from '../layouts/imports';

import { CurrentPage, PlantCare } from '../components/imports';

function PlantCarePage() {
  return(
    <HeaderFooterLayout>
      <CurrentPage page={['Plante Care']} />
      <PlantCare />
    </HeaderFooterLayout>
  )
}

export default PlantCarePage;
