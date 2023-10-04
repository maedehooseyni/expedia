import { useBooking } from "../contexts/BookingContext";
import { useState } from "react";
import styles from "./BookingForm.module.css";

function BookingForm() {
  const [showContryList, setShowCountryList] = useState(false);
  const [showTravelerList, setShowTravelerList] = useState(false);
  const { people, setPeople } = useBooking();
  const { cityName, setCityName } = useBooking();

  function handleClickCountry() {
    showTravelerList ? setShowTravelerList(false) : "";
    setShowCountryList((showContryList) => !showContryList);
  }

  function handleClickTraveler() {
    showContryList ? setShowCountryList(false) : "";
    setShowTravelerList((showTravelerList) => !showTravelerList);
  }

  return (
    <div className={styles.form}>
      <div className={styles.container} onClick={handleClickCountry}>
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5 9a7 7 0 1 1 14 0c0 5.25-7 13-7 13S5 14.25 5 9zm4.5 0a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0z"></path>
        </svg>
        <div className={styles.flexAlignItems}>
          <span className={styles.label}>Going to</span>
          <span>{cityName ? cityName : "Going to"}</span>
        </div>

        {showContryList && (
          <div className={styles.countryList}>
            <ul>
              <li onClick={() => setCityName("England")}>England</li>
              <li onClick={() => setCityName("Paradise")}>Paradise</li>
              <li onClick={() => setCityName("Las Vegas")}>Las Vegas</li>
              <li onClick={() => setCityName("New York")}>New York</li>
              <li onClick={() => setCityName("Cambridge")}>Cambridge</li>
            </ul>
          </div>
        )}
      </div>

      <div className={styles.container} onClick={handleClickTraveler}>
        <svg
          className="uitk-icon uitk-field-icon"
          aria-hidden="true"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM4 18c0-2.66 5.33-4 8-4s8 1.34 8 4v2H4v-2z"></path>
        </svg>
        <div className={styles.flexAlignItems}>
          <span className={styles.label}>Travelers</span>
          <span>{people ? people : "2 Travelers"}</span>
        </div>

        {showTravelerList && (
          <div className={styles.travelerList}>
            <ul className={styles.marginRight}>
              <li onClick={() => setPeople("2 travelers")}>2 travelers</li>
              <li onClick={() => setPeople("3 travelers")}>3 travelers</li>
              <li onClick={() => setPeople("4 travelers")}>4 travelers</li>
              <li onClick={() => setPeople("5 travelers")}>5 travelers</li>
              <li onClick={() => setPeople("6 travelers")}>6 travelers</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
export default BookingForm;
