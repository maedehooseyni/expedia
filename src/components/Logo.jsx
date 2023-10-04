import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <Link to="/">
      <div className={styles.logo}>
        <img src="/logo.svg" alt="WorldWise logo" className={styles.img} />
      </div>
    </Link>
  );
}

export default Logo;
