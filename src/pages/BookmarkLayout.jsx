import PageNav from "../components/PageNav"
import Reserve from "../components/Bookmark";
import styles from './BookmarkLayout.module.css'

export default function ReserveLayout() {
  return (
    <main className={styles.bookmark}>
      <PageNav/>
      <Reserve/>
    </main>
  )
}

