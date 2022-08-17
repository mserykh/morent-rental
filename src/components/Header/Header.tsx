import Logo from '../Logo';
import Filter from './Filter/Filter';
import HeaderNav from './HeaderNav';

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <Logo />
        <Filter />
        <HeaderNav />
      </div>
    </header>
  );
};

export default Header;
