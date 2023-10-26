import styles from "./page.module.css"
import CapstoneCard from './ClientComponent/CapstoneCard'

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <CapstoneCard/>
        <CapstoneCard/>
        <CapstoneCard/>
      </main>
    </>
  )
}
