import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>Det her er homepage til det her Next projekt</h1>
        </div>
      </main>
    </div>
  );
}
