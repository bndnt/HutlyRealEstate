import "./reviews.css";
import Star from "../../../public/icons/stars.svg";
const Reviews = () => {
  return (
    <div className="reviews">
      <div className="container">
        <div className="reviews__wrapper">
          <div className="reviews__grid">
            <div className="reviews__title">What our customers say</div>
            <ul className="reviews__list">
              <li className="reviews__item">
                <div className="reviews__text">
                  They make it super easy and safe to find a room for rent,
                  prioritizing both convenience and safety. The customer support
                  team is exceptionally responsive and genuinely helpful,
                  ensuring a smooth experience. I wholeheartedly endorse this
                  platform.
                </div>
                <div className="reviews__info">
                  <div className="reviews__name">Ashley Cooper</div>
                  <ul className="reviews__stars-list">
                    <li>
                      <img src={Star} alt="star" />
                    </li>
                    <li>
                      <img src={Star} alt="star" />
                    </li>
                    <li>
                      <img src={Star} alt="star" />
                    </li>
                    <li>
                      <img src={Star} alt="star" />
                    </li>
                    <li>
                      <img src={Star} alt="star" />
                    </li>
                  </ul>
                </div>
              </li>
              <li className="reviews__item">
                <div className="reviews__text">
                  They make it super easy and safe to find a room for rent,
                  prioritizing both convenience and safety.
                </div>
                <div className="reviews__info">
                  <div className="reviews__name">Ashley Cooper</div>
                  <ul className="reviews__stars-list">
                    <li>
                      <img src={Star} alt="star" />
                    </li>
                    <li>
                      <img src={Star} alt="star" />
                    </li>
                    <li>
                      <img src={Star} alt="star" />
                    </li>
                    <li>
                      <img src={Star} alt="star" />
                    </li>
                    <li>
                      <img src={Star} alt="star" />
                    </li>
                  </ul>
                </div>
              </li>
              <li className="reviews__item">
                <div className="reviews__text">
                  They make it super easy and safe to find a room for rent,
                  prioritizing both convenience and safety. The customer support
                  team is exceptionally responsive and genuinely helpful,
                  ensuring a smooth experience. I wholeheartedly endorse this
                  platform.
                </div>
                <div className="reviews__info">
                  <div className="reviews__name">Ashley Cooper</div>
                  <ul className="reviews__stars-list">
                    <li>
                      <img src={Star} alt="star" />
                    </li>
                    <li>
                      <img src={Star} alt="star" />
                    </li>
                    <li>
                      <img src={Star} alt="star" />
                    </li>
                    <li>
                      <img src={Star} alt="star" />
                    </li>
                    <li>
                      <img src={Star} alt="star" />
                    </li>
                  </ul>
                </div>
              </li>
              <li className="reviews__item">
                <div className="reviews__text">
                  They make it super easy and safe to find a room for rent,
                  prioritizing both convenience and safety. The customer support
                  team is exceptionally responsive and genuinely helpful,
                  ensuring a smooth experience. I wholeheartedly endorse this
                  platform. Lorem ipsum dolor, sit amet consectetur adipisicing
                  elit. Quod, labore accusantium excepturi nisi voluptas itaque
                  nulla, adipisci asperiores beatae assumenda repellendus
                  tempora dicta dolor repudiandae aliquid, voluptatibus iure?
                  Eos, veniam?
                </div>
                <div className="reviews__info">
                  <div className="reviews__name">Ashley Cooper</div>
                  <ul className="reviews__stars-list">
                    <li>
                      <img src={Star} alt="star" />
                    </li>
                    <li>
                      <img src={Star} alt="star" />
                    </li>
                    <li>
                      <img src={Star} alt="star" />
                    </li>
                    <li>
                      <img src={Star} alt="star" />
                    </li>
                    <li>
                      <img src={Star} alt="star" />
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
