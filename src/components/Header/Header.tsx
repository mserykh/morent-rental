import Logo from '../Logo';

import search from '../../assets/icons/search.svg';
import filter from '../../assets/icons/filter.svg';
import heart from '../../assets/icons/heart.svg';
import notification from '../../assets/icons/notification.svg';
import settings from '../../assets/icons/settings.svg';

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <div>
        <input type="text" />
        <img src="" alt="" />
      </div>
      <nav>
        <ul>
          <li>
            <a href="#"></a>
          </li>
          <li>
            <a href="#"></a>
          </li>
          <li>
            <a href="#"></a>
          </li>
          <li>
            <a href="#"></a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
