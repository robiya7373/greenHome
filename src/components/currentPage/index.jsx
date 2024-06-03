import React from 'react';

import './style.css'

function CurrentPage({page}) {
  // Data is array

  return(
    <h1 className="currentpage">
      <span className="currentpage__bold" >Home</span>
      {page.map(item => {
        return ` / ${item}`
      })}
    </h1>
  );
}

export default CurrentPage;
