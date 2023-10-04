/* eslint-disable react/prop-types */
import { useBookmark } from "../contexts/BookmarkContext";
import Spinner from "./Spinner";
import Message from "./Message";
import styles from "./Bookmark.module.css";

export default function Bookmarks() {
  const { bookmarks, deleteBookmark ,isLoading} = useBookmark();

  if (isLoading) return <Spinner />;

  if (!bookmarks.length)
    return <Message message="You don't have any bookmarks" />;

  return (
    <ul className={styles.bookmark}>
      {bookmarks?.map((bookmark) => (
        <Bookmark
          bookmark={bookmark}
          deleteBookmark={deleteBookmark}
          key={bookmark.id}
        />
      ))}
    </ul>
  );
}

function Bookmark({ bookmark, deleteBookmark }) {
  return (
    <li className={styles.bookmarkContainer}>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <img
            className={styles.img}
            src={bookmark.image}
            alt={bookmark.hotelName}
          />
        </div>

        <div className={styles.infoContainer}>
          <div className={styles.nameInfo}>
            <h3>{bookmark.hotelName}</h3>
            <span>{bookmark.cityName}</span>
          </div>

          <div className={styles.travelerContainer}>
            <span>{bookmark.traveler}</span>
          </div>

          <div className={styles.priceContainer}>
            <strong>${bookmark.price}</strong>
          </div>
        </div>

        <div
          className={styles.delete}
          onClick={() => deleteBookmark(bookmark.id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
          <span>Delete</span>
        </div>
      </div>
    </li>
  );
}
