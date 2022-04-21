import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCss3,
  faGulp,
  faJs,
  faNodeJs,
  faNpm,
  faReact,
  faSass,
} from '@fortawesome/free-brands-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
const Technologies = () => {
  return (
    <>
      <section className="list">
        <nav className="list__nav">
          <ul className="list__ul">
            <div className="list__title">
              <li>
                <strong>Tecnologías</strong>
              </li>
            </div>
            <div className="list__items">
              <li className="list__item">
                <FontAwesomeIcon icon={faHtml5} />
              </li>
              <li className="list__item">
                <FontAwesomeIcon icon={faSass} />
              </li>
              <li className="list__item">
                <FontAwesomeIcon icon={faCss3} />
              </li>
              <li className="list__item">
                <FontAwesomeIcon icon={faReact} />
              </li>
              <li className="list__item">
                <FontAwesomeIcon icon={faJs} />
              </li>
              <li className="list__item">
                <FontAwesomeIcon icon={faNodeJs} />
              </li>
              <li className="list__item">
                <FontAwesomeIcon icon={faGulp} />
              </li>
              <li className="list__item">
                <FontAwesomeIcon icon={faNpm} />
              </li>
            </div>
          </ul>
        </nav>
      </section>
    </>
  );
};

export default Technologies;
