import MyPicture from '../images/myphoto.jpg';

const Aboutme = () => {
  return (
    <>
      <section id="aboutMe" className="main">
        <article>
          <img className="main__picture" src={MyPicture} alt="MyPhoto" />
        </article>

        <article className="main__aboutme">
          <h2 className="main__aboutme--title">Sobre mí</h2>
          <h3 className="main__aboutme--text">
            Mi nombre es <u>Victoria</u>, y soy{' '}
            <u>desarrolladora Junior Frontend</u>. Tras años dedicándome al
            sector educativo, decidí darle un giro profesional a mi vida y
            enfrentarme a nuevos retos en el <u>mundo tecnológico</u>. Así fue
            como comencé mi aventura en Adalab, bootcamp en el que descubrí que
            me encantaría dedicarme a este sector y seguir aprendiendo{' '}
            <u>nuevas tecnologías</u> a parte de las nociones que ya aprendí en
            el bootcamp. Mi <u>objetivo</u> es poder seguir aprendiendo y
            formándome en entornos de trabajo que me permitan seguir alimentando
            mi curiosidad.
          </h3>
        </article>
      </section>
    </>
  );
};

export default Aboutme;
