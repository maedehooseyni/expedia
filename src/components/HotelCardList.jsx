import HotelCardItem from "./HotelCardItem";
import { useBooking } from "../contexts/BookingContext";
import Spinner from "./Spinner";
import styles from "./HotelCardList.module.css";

function HotelCardList() {
  const { cards, isLoading } = useBooking();
  if (isLoading) return <Spinner />;

  return (
    <div className={styles.hotelCardList}>
      <ul className={styles.hotelList}>
        {cards.map((cards) => (
          <HotelCardItem cards={cards} key={cards.hotelName} />
        ))}
      </ul>
    </div>
  );
}

export default HotelCardList;
