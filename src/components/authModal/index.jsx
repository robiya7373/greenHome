// Libs
import React, {useState} from 'react';

// Component
import LoginModal from './loginModal/LoginModal';
import RegisterModal from './registerModal/RegisterModal'

function AuthModal({closeFunc}) {

  const [isRegister, setIsRegister] = useState(false)

  return (
    <div>
      {isRegister ?
      (<RegisterModal changeFrom={() => setIsRegister(false)} closeFunc={closeFunc} />)
      :
      (<LoginModal changeFrom={() => setIsRegister(true)} closeFunc={closeFunc} />)}
    </div>
  )
}

export default AuthModal;
