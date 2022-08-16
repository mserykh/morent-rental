import Logo from '../Logo';

const Footer = () => {
  const footerLinksList = [
    {
      title: 'About',
      links: [
        { url: '#', text: 'How it works' },
        { url: '#', text: 'Featured' },
        { url: '#', text: 'Partnership' },
        { url: '#', text: 'Bussiness Relation' },
      ],
    },
    {
      title: 'Community',
      links: [
        { url: '#', text: 'Events' },
        { url: '#', text: 'Blog' },
        { url: '#', text: 'Podcast' },
        { url: '#', text: 'Invate a friend' },
      ],
    },
    {
      title: 'Socials',
      links: [
        { url: '#', text: 'Discord' },
        { url: '#', text: 'Instagram' },
        { url: '#', text: 'Twitter' },
        { url: '#', text: 'Facebook' },
      ],
    },
  ];
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-upper">
          <div className="footer-upper__column-right">
            <Logo />
            <p className="footer-upper__text">
              Our vision is to provide convenience and help increase your sales
              business.
            </p>
          </div>
          <div className="footer-upper__column-left">
            {footerLinksList.map((linksList) => (
              <nav key={linksList.title}>
                <h3 className="footer-nav__title">{linksList.title}</h3>
                <ul className="footer-nav__list">
                  {linksList.links.map((link) => (
                    <li className="footer-nav__item" key={link.text}>
                      <a href={link.url} className="footer-nav__link">
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>
        <div className="footer-lower">
          <p className="footer-lower__text footer__copyrights">{`©${new Date().getFullYear()} MORENT. All rights reserved`}</p>
          <a
            href="#"
            className="footer-lower__text footer__policy"
          >{`Privacy & Policy`}</a>
          <a
            href="#"
            className="footer-lower__text footer__terms"
          >{`Terms & Condition`}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
