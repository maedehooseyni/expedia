import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";

function PageNav() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Logo />

        <ul>
          <li>
            <NavLink to="/hotel">
              <div className={styles.svgContainer}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  x="0"
                  y="0"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path
                      d="M256 96c-57.35 0-104 46.65-104 104s46.65 104 104 104 104-46.65 104-104S313.35 96 256 96zm56 152c0 9.094-7.577 16.41-16.765 15.982-8.609-.401-15.235-7.813-15.235-16.431V221a5 5 0 0 0-5-5h-38a5 5 0 0 0-5 5v26.551c0 8.618-6.626 16.031-15.235 16.431C207.577 264.41 200 257.094 200 248v-95.551c0-8.618 6.626-16.03 15.235-16.431C224.423 135.59 232 142.906 232 152v27a5 5 0 0 0 5 5h38a5 5 0 0 0 5-5v-26.551c0-8.618 6.626-16.03 15.234-16.431C304.423 135.59 312 142.906 312 152z"
                      fill="#000000"
                    ></path>
                    <path d="M256 0C145.72 0 56 89.72 56 200c0 78.697 45.439 155.129 95.73 215.27 46.54 55.65 92.48 91.82 94.41 93.33 5.748 4.499 13.885 4.567 19.72 0 1.93-1.51 47.87-37.68 94.41-93.33C410.547 355.146 456 278.71 456 200 456 89.72 366.28 0 256 0zm0 336c-74.99 0-136-61.01-136-136S181.01 64 256 64s136 61.01 136 136-61.01 136-136 136z"></path>
                  </g>
                </svg>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/login">
              <div className={styles.svgContainer}>
                <svg
                  aria-describedby="header-menu-account_circle-description"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <desc id="header-menu-account_circle-description">
                    Sign in
                  </desc>
                  <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6zM6 15.98a7.2 7.2 0 0 0 12 0c-.03-1.99-4.01-3.08-6-3.08-2 0-5.97 1.09-6 3.08z"></path>
                </svg>
              </div>
            </NavLink>
          </li>
          <li className={styles.bookmark}>
            <NavLink to="/bookmarks">
              Bookmark
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default PageNav;
