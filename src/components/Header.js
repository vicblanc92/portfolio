import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import woman from '../images/woman.png';

const Header = () => {
  return (
    <>
      <header className="header">
        <img className="header__image" src={woman} alt="mujer ordenador" />
        <h2 className="header__text">
          Bienvenido/a a mi porfolio, mi nombre es Victoria Blanc Rastoll y soy
          Frontend Junior Developer
        </h2>
        <h3 className="header__follow">
          ¿Quieres saber más sobre mi? ¡Acompáñame!
        </h3>
        <a href="#aboutMe">
          <FontAwesomeIcon className="header__arrow" icon={faArrowCircleDown} />
        </a>
      </header>
    </>
  );
};

export default Header;
