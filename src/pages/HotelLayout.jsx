import PageNav from "../components/PageNav";
import BookingForm from "../components/BookingForm";
import HotelCardList from "../components/HotelCardList";
import styles from "./HotelLayout.module.css";

export default function HotelLayout() {
  return (
    <main className={styles.main}>
      <PageNav />
      <BookingForm />
      <HotelCardList />
    </main>
  );
}
