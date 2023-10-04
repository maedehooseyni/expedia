import Sidebar from "../components/Sidebar";
import Map from "../components/Map";
import User from "../components/User";
import styles from "./AppLayout.module.css";

function AppLayout() {
  return (
    <div className={styles.app}>
      <div className={styles.container}>

        <div className={styles.sidebar}>
        <Sidebar />
        </div>

        <div className={styles.mapContainer}>
        <Map />
        </div>
      </div>
      <User />
    </div>
  );
}

export default AppLayout;
