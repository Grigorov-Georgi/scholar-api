import scholarLogo from "../../../public/scholar_logo.png";
import './Header.css';

const Header = () => {
  return (
    <div className="header-wrapper">
      <img className="header-image" src={scholarLogo} alt="Scholar API logo" />
      <div className="header-text">Scholar API</div>
    </div>
  );
};

export default Header;
