import { ReactComponent as Favorites } from '../../assets/icons/heart.svg';
import { ReactComponent as Notification } from '../../assets/icons/notification.svg';
import { ReactComponent as Settings } from '../../assets/icons/settings.svg';

import profile from '../../assets/icons/profile.png';

const HeaderNav = () => {
  return (
    <nav className="header__nav nav">
      <ul className="nav__list">
        <li className="nav__item">
          <a className="nav__link" href="#">
            <Favorites className="nav__icon" fill="#596780" />
            <span className="sr-only">Selected cars</span>
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#">
            <Notification className="nav__icon" />
            <span className="sr-only">Notifications</span>
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#">
            <Settings className="nav__icon" />
            <span className="sr-only">Settings</span>
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#">
            <img src={profile} alt="" className="nav__icon" />
            <span className="sr-only">Go to your profile</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
