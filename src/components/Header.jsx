import { useState } from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';

const Header = () => {
  const [loginBtn, setLoginBtn] = useState('Login');
  return (
    <div className="header-container">
      <div>
        <img src={LOGO_URL} alt="logo" className="logo" />
      </div>
      <div className="navbar">
        <ul>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/cart">Cart</Link>
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
