import "./reviews.css";
import Star from "../../../public/icons/stars.svg";
import RewievsData from "../data/rewievs";
const Reviews = () => {
  return (
    <div className="reviews">
      <div className="container">
        <div className="reviews__wrapper">
          <div className="reviews__grid">
            <div className="reviews__title">What our customers say</div>
            {Array.isArray(RewievsData) && (
              <ul className="reviews__list">
                {RewievsData.slice(0, 4).map((item) => (
                  <li key={item.id} className="reviews__item">
                    <div className="reviews__text">{item.text}</div>
                    <div className="reviews__info">
                      <div className="reviews__name">{item.name}</div>
                      <ul className="reviews__stars-list">
                        {[...Array(5)].map((_, index) => (
                          <li key={index}>
                            <img src={Star} alt="star" />
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
