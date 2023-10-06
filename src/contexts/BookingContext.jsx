/* eslint-disable react/prop-types */
import {
  createContext,
  useContext,
  useEffect,
  useState,
  useReducer,
} from "react";

const BASE_URL = "https://recipe-api-iyso.onrender.com";

const BookingContext = createContext();

const initialState = {
  cards: [],
  isLoading: false,
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };

    case "cards/loaded":
      return { ...state, isLoading: false, cards: action.payload };

    case "filter/traveler":
      return { ...state, isLoading: false, cards: action.payload };

    case "filter/city":
      return { ...state, isLoading: false, cards: action.payload };

    case "reserve/loaded":
      return { ...state, isLoading: false, selectedHotel: action.payload };

    case "rejected":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      throw new Error("Unknown action type");
  }
}

function BookingProvider({ children }) {
  const [{ cards, isLoading }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const [people, setPeople] = useState("");
  const [cityName, setCityName] = useState("");

  useEffect(function () {
    async function getCards() {
      dispatch({ type: "loading" });

      try {
        const res = await fetch(`${BASE_URL}/cards`);
        const data = await res.json();

        dispatch({ type: "cards/loaded", payload: data });
      } catch {
        dispatch({
          type: "rejected",
          payload: "There was an error loading the cards!",
        });
      }
    }
    getCards();
  }, []);

  useEffect(
    function () {
      if (!people) return;
      async function filterTraveler() {
        dispatch({ type: "loading" });

        try {
          const res = await fetch(`${BASE_URL}/cards`);
          const data = await res.json();
          const filterTraveler = data.filter(
            (cards) => cards.traveler === people
          );

          dispatch({ type: "filter/traveler", payload: filterTraveler });
        } catch {
          dispatch({
            type: "rejected",
            payload: "There was an error filter the traveler!",
          });
        }
      }
      filterTraveler();
    },
    [people]
  );

  useEffect(
    function () {
      if (!cityName) return;
      async function filterCity() {
        dispatch({ type: "loading" });

        try {
          const res = await fetch(`${BASE_URL}/cards`);
          const data = await res.json();
          const filterCity = data.filter(
            (cards) => cards.cityName === cityName
          );

          dispatch({ type: "filter/city", payload: filterCity });
        } catch {
          dispatch({
            type: "rejected",
            payload: "There was an error filter the city!",
          });
        }
      }
      filterCity();
    },
    [cityName]
  );

  return (
    <BookingContext.Provider
      value={{
        cards,
        isLoading,
        people,
        setPeople,
        cityName,
        setCityName,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

function useBooking() {
  const context = useContext(BookingContext);
  if (context === undefined)
    throw new Error("BookingContext was defined outside the cities provider");
  return context;
}

export { BookingProvider, useBooking };
