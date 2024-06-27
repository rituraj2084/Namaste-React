import { useState } from 'react';
import { LOGO_URL } from '../utils/constants';

const Header = () => {
  const [loginBtn, setLoginBtn] = useState('Login');
  return (
    <div className="header-container">
      <div>
        <img src={LOGO_URL} alt="logo" className="logo" />
      </div>
      <div className="navbar">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="btn"
            onClick={() => {
              loginBtn === 'Login'
                ? setLoginBtn('Logout')
                : setLoginBtn('Login');
            }}
          >
            {loginBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
