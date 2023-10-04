import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from "./Homepage.module.css";

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />

      <section>
        <h1>
          <span>Expedia keeps track of</span>
          <span> your adventures</span>
        </h1>

        <h2>
          A world map that tracks your footsteps into every city you can think
          of.
        </h2>
        <Link to="/login" className="cta">
          Start tracking now
        </Link>

        <div className={styles.imgContainer}>
          <img className={styles.img} src="../public/images.jpg" alt="image" />
        </div>
      </section>
    </main>
  );
}
