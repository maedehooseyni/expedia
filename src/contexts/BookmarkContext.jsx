/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer, useEffect } from "react";

const BASE_URL = "https://recipe-api-iyso.onrender.com";

const BookmarkContext = createContext();

const initialState = {
  bookmarks: [],
  isLoading: false,
  error: "",
};

function bookmarkReducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };

    case "bookmarks/loaded":
      return {
        ...state,
        isLoading: false,
        bookmarks: action.payload,
      };

    case "selectedHotel/loaded":
      return {
        ...state,
      };

    case "bookmark/add":
      return {
        ...state,
        isLoading: false,
        bookmarks: [...state.bookmarks, action.payload],
      };

    case "bookmark/deleted":
      return {
        ...state,
        isLoading: false,
        bookmarks: state.bookmarks.filter(
          (bookmark) => bookmark.id !== action.payload
        ),
      };

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

function BookmarkProvider({ children }) {
  const [{ bookmarks, isLoading }, dispatch] = useReducer(
    bookmarkReducer,
    initialState
  );

  useEffect(function () {
    async function fetchBookmarks() {
      dispatch({ type: "loading" });

      try {
        const res = await fetch(`${BASE_URL}/bookmarks`);
        const data = await res.json();

        dispatch({ type: "bookmarks/loaded", payload: data });
      } catch {
        dispatch({
          type: "rejected",
          payload: "There was an error loading bookmarks!",
        });
      }
    }
    fetchBookmarks();
  }, []);

  async function getSelectedHotel(id) {
  
    dispatch({ type: "loading" });

    try {
      const res = await fetch(`${BASE_URL}/cards/${id}`);
      const data = await res.json();
      addBookmark(data);

      dispatch({ type: "selectedHotel/loaded", payload: data });
    } catch {
      dispatch({
        type: "rejected",
        payload: "There was an error loading the selectedHotel!",
      });
    }
  }

  async function addBookmark(newBookmark) {
    dispatch({ type: "loading" });

    try {
      const res = await fetch(`${BASE_URL}/bookmarks`, {
        method: "POST",
        body: JSON.stringify(newBookmark),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      dispatch({ type: "bookmark/add", payload: data });
    } catch {
      dispatch({
        type: "rejected",
        payload: "There was an error creating the bookmark!",
      });
    }
  }

  async function deleteBookmark(id) {
    dispatch({ type: "loading" });

    try {
      await fetch(`${BASE_URL}/bookmarks/${id}`, {
        method: "DELETE",
      });

      dispatch({ type: "bookmark/deleted", payload: id });
    } catch {
      dispatch({
        type: "rejected",
        payload: "There was an error deleting the bookmark!",
      });
    }
  }

  return (
    <BookmarkContext.Provider
      value={{
        isLoading,
        getSelectedHotel,
        bookmarks,
        deleteBookmark,
      }}
    >
      {children}
    </BookmarkContext.Provider>
  );
}

function useBookmark() {
  const context = useContext(BookmarkContext);
  if (context === undefined)
    throw new Error("BookmarkContext was used outside the BookmarkProvider");
  return context;
}

export { useBookmark, BookmarkProvider };
