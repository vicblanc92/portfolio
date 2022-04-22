import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <>
      <section className="footer">
        <nav className="footer__nav">
          <a href="#aboutMe">
            <FontAwesomeIcon
              className="header__arrow"
              icon={faArrowAltCircleUp}
            />
          </a>
          <ul className="footer__ul">
            <div className="footer__title">
              <li>
                <strong>Contacto</strong>
              </li>
            </div>
            <div className="footer__items">
              <li className="footer__item">
                <a
                  className="footer__item"
                  href="https://linkedin.com/in/victoria-blanc"
                >
                  <FontAwesomeIcon icon={faLinkedin} />{' '}
                </a>
              </li>

              <li className="footer__item">
                <a
                  className="footer__item"
                  href="https://twitter.com/BlancRastoll"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li className="footer__item">
                <a
                  className="footer__item"
                  href="https://github.com/vicblanc92"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
            </div>
          </ul>
        </nav>
      </section>
    </>
  );
};

export default Footer;
