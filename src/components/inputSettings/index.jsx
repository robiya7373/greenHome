import React from 'react';

import './style.css'

function InputSettings({inputTitle, inputType, isImportant}) {
  return(
    <div className="accoutnDetail__input-container">
      <h2 className="accountDetail__input-title">
        {inputTitle}
        {isImportant ?
        (<span className="accountDetail__important-field">*</span>)
        :
        null}
      </h2>
      <input className="accoutnDetail__input" type={inputType} />
    </div>
  )
}

export default InputSettings;
