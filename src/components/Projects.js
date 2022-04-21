import ReactProject from '../images/HarryPotterPC.png';
import JSProject from '../images/JS.png';
import HTMLandCSSProject from '../images/anonymous.png';
import SuperProgrammersProject from '../images/superprogrammers.png';
import AwesomeProfileCardsProject from '../images/awesomeprofilecards.png';
import AwesomeProfileCards2 from '../images/awesomeprofilecardsh.png';
import usersTable from '../images/usersTable.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
  return (
    <>
      <section className="projects">
        <h2 className="projects__title">Proyectos individuales</h2>
        <article className="project">
          <div>
            <img
              loading="lazy"
              className="project__img"
              src={HTMLandCSSProject}
              alt="imagen de Anonymous Proxy web"
            ></img>
          </div>
          <div className="project__titleAndInfo">
            <a
              className="project__title"
              href="https://vicblanc92.github.io/Anonymous-Proxy/"
            >
              <h3 className="project__title">
                Anonymous Proxy maquetado con HTML y CSS{' '}
                <FontAwesomeIcon icon={faLink} />
              </h3>
            </a>
            <p className="project__info">
              Página web desarrollada con HTML Y CSS. La usuaria o usuario podrá
              ver una página maquetada con un diseño dado. Pulsando el botón
              perteneciente a la imagen principal podrá desplazarse hacia otro
              apartado y pulsando el botón del footer podrá volver a la imagen
              principal. Este primer proyecto individual es además, totalmente
              responsive.
            </p>
          </div>
        </article>
        <article className="project">
          <div>
            <img
              loading="lazy"
              className="project__img"
              src={JSProject}
              alt="Buscador de series anime"
            ></img>
          </div>
          <div className="project__titleAndInfo">
            <a
              className="project__title"
              href="https://vicblanc92.github.io/Buscador-Series-Anime/"
            >
              <h3 className="project__title">
                Web Buscador de series anime programada con Javascript{' '}
                <FontAwesomeIcon icon={faLink} />
              </h3>
            </a>
            <p className="project__info">
              Proyecto desarrollado con Javascript, HTML y SASS. Los fans de las
              series de anime podrán hacer búsquedas e incluir sus series
              favoritas solo pulsando un botón. Además, cuando se recarga la
              página, estas series seguirán apareciendo como favoritas en este
              apartado.El usuario o usuaria podrá borrar sus series favoritas
              una por una o todas de una vez.
            </p>
          </div>
        </article>
        <article className="project">
          <div>
            <img
              loading="lazy"
              className="project__img"
              src={ReactProject}
              alt="Harry Potter React"
            ></img>
          </div>
          <div className="project__titleAndInfo">
            <a
              className="project__title"
              href="https://vicblanc92.github.io/Harry-Potter/"
            >
              <h3 className="project__title">
                Web de Harry Potter programada con React{' '}
                <FontAwesomeIcon icon={faLink} />
              </h3>
            </a>
            <p className="project__info">
              Proyecto desarrollado con React, HTML y SASS. Los aficionados del
              universo Harry Potter podrán buscar a sus personajes favoritos
              según nombres, casas, género e incluso especie. Además cada uno de
              los personajes de la saga tiene su propia tarjeta en la que
              podremos ver más detalles del personaje.
            </p>
          </div>
        </article>
        <article className="project">
          <div>
            <img
              loading="lazy"
              className="project__img"
              src={usersTable}
              alt="imagen de Anonymous Proxy web"
            ></img>
          </div>
          <div className="project__titleAndInfo">
            <a
              className="project__title"
              href="https://vicblanc92.github.io/users-table-react-redux/"
            >
              <h3 className="project__title">
                Tabla de usuarios con React/Redux
                <FontAwesomeIcon icon={faLink} />
              </h3>
            </a>
            <p className="project__info">
              Página web desarrollada con React y la librería Redux para el
              manejo de estado de las aplicaciones. La página consta de una
              tabla de usuarios, cuyos datos vienen de una API y una tarjeta que
              siempre muestra el primer usuario de la tabla. El usuario o
              usuaria puede ordenar la tabla y filtrar por ciudad. Gracias a la
              implementación de la librería Ant Design podemos ver este diseño
              de tabla, de tarjeta e incluso las funcionalidades añadidas.
            </p>
          </div>
        </article>
      </section>

      <section className="projects">
        <h2 className="projects__title">Proyectos grupales</h2>
        <article className="project">
          <div>
            <img
              loading="lazy"
              className="project__img"
              src={SuperProgrammersProject}
              alt="imagen del proyecto de lasSuper Programmers"
            ></img>
          </div>
          <div className="project__titleAndInfo">
            <a
              className="project__title"
              href="http://beta.adalab.es/project-promo-o-module-1-team-4/"
            >
              <h3 className="project__title">
                Primera web grupal con el equipo Super Programers{' '}
                <FontAwesomeIcon icon={faLink} />
              </h3>
            </a>
            <p className="project__info">
              Este proyecto grupal consiste en una página web responsive hecha
              de manera colaborativa con un diseño dado. Consta de una página
              principal con información social del equipo y una página de
              contacto con un formulario.
            </p>
          </div>
        </article>
        <article className="project">
          <div>
            <img
              loading="lazy"
              className="project__img"
              src={AwesomeProfileCardsProject}
              alt="imagen del proyecto Awesome Profile Cards"
            ></img>
          </div>
          <div className="project__titleAndInfo">
            <a
              className="project__title"
              href="http://beta.adalab.es/project-promo-o-module-2-team-8/"
            >
              <h3 className="project__title">
                Awesome profile cards <FontAwesomeIcon icon={faLink} />
              </h3>
            </a>
            <p className="project__info">
              El presente proyecto consiste en una página web desarrollada con
              Javascript que permite crear tarjetas de visita personalizadas. La
              página web permite elegir los colores de la tarjeta, cargar los
              datos de la usuaria o usuario, incluyendo una foto y subirlo a
              twitter con un mensaje. Los datos se guardan al cargar de nuevo la
              página y avisa de los campos obligatorios que están vacíos.
            </p>
          </div>
        </article>
        <article className="project">
          <div>
            <img
              loading="lazy"
              className="project__img"
              src={AwesomeProfileCards2}
              alt="imagen del proyecto Awesome Profile Cards"
            ></img>
          </div>
          <div className="project__titleAndInfo">
            <a
              className="project__title"
              href="https://github.com/Adalab/project-promo-o-module-3-team-1"
            >
              <h3 className="project__title">
                Caso de código heredado con el proyecto anterior y creación de
                servidor web <FontAwesomeIcon icon={faLink} />
              </h3>
            </a>
            <p className="project__info">
              Este proyecto consiste en un caso de código heredado. Con el
              proyecto anterior de otro grupo de compañeras, se migró este a
              React. Además del desarrollo del primer servidor web del equipo.
            </p>
          </div>
        </article>
      </section>
    </>
  );
};
export default Projects;
