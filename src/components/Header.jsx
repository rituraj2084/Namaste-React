import { LOGO_URL } from '../utils/constants';

const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};
export default Header;
