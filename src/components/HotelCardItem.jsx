/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./HotelCardItem.module.css";
import { useBookmark } from "../contexts/BookmarkContext";

function HotelCardItem({ cards }) {
  const { getSelectedHotel, bookmarks } = useBookmark();
  const {
    hotelName,
    cityName,
    image,
    price,
    off,
    id,
    traveler,
    score,
    rating,
  } = cards;

  function handleClickBtn() {
    getSelectedHotel(id);
  }

  const ids = bookmarks.map(({ id }) => id);

  return (
    <div className={styles.container}>
      <li className={styles.cardItem}>
        <div className={styles.row}>
          <img className={styles.img} src={image} alt={hotelName} />

          <div
            className={`${styles.svgContainer} ${
              ids.includes(id) ? styles["active"] : ""
            }`}
            onClick={() => handleClickBtn(id)}
          >
            <Link className={styles.container} to="/bookmarks">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                <rect />
                <path d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z" />
              </svg>
            </Link>
          </div>
        </div>

        <div className={styles.infoContainer}>
          <div className={styles.nameInfo}>
            <h3>{hotelName}</h3>
            <span>{cityName}</span>
          </div>

          <div className={styles.travelerContainer}>
            <span>{traveler}</span>
          </div>

          <div className={styles.score}>
            <div>{score}</div>
            <span>{rating}</span>
          </div>
        </div>

        <div className={styles.priceContainer}>
          <span className={styles.off}>{off}% off</span>
          <strong>${price}</strong>
        </div>
      </li>
    </div>
  );
}

export default HotelCardItem;
