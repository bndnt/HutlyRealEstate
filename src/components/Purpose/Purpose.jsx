import "./purpose.css";
import Button from "../Button/Button";
import Offer from "../../../public/image/offer.jpg";

const Purpose = () => {
  return (
    <div className="purpose">
      <div className="container">
        <div className="purpose__wrapper">
          <div className="purpose__flex">
            <div className="purpose__img-wrapper">
              <img src={Offer} alt="purpose" />
            </div>
            <div className="purpose__about">
              <div className="purpose__clients">
                <div className="purpose__clients-text">Satisfied Clients</div>
                <div className="purpose__clients-title">8.4M+</div>
              </div>

              <div className="purpose__about-title">
                We can bring to life everything you've ever envisioned and
                dreamed of - your ideals and desires are our creations.
              </div>
              <div className="purpose__about-text">
                Our purpose is to transform your wildest dreams into reality.
                Regardless of how unconventional your vision may be, we possess
                the capability to craft your dream home, fulfilling your every
                desire.
              </div>
              <Button prop="See More" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purpose;
