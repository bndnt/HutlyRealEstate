import "./services.css";

const Services = () => {
  return (
    <div className="services">
      <div className="container">
        <div className="services__wrapper">
          <div className="services__title-main">Services</div>
          <ul className="services__list">
            <li className="services__item">
              <span className="services__number">01</span>
              <h3 className="services__title">Furniture Design</h3>
              <p className="services__text">
                The design of furniture holds substantial influence over the
                aesthetics, ambiance, and usability of an area, exerting a
                profound effect on our everyday experiences.
              </p>
            </li>
            <li className="services__item">
              <span className="services__number">02</span>
              <h3 className="services__title">Interior Details</h3>
              <p className="services__text">
                Incorporating interior detailing introduces dimension, tactile
                qualities, and captivating visual elements to a room, enhancing
                the overall design through the addition of those final
                embellishments.
              </p>
            </li>
            <li className="services__item">
              <span className="services__number">03</span>
              <h3 className="services__title">Home Revamping </h3>
              <p className="services__text">
                The design of furniture holds substantial influence over the
                aesthetics, ambiance, and usability of an area, exerting a
                profound effect on our everyday experiences.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
