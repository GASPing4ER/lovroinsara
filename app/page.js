import Header from "@/components/header/header";
import styles from "./page.module.css";
import Countdown from "@/components/countdown/countdown";
import WhenWhere from "@/components/whenwhere/whenwhere";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Header />
        <div className={styles.content}>
          <h2>LOTI & GAŠPER</h2>
          <h1>Poročiva se!</h1>
        </div>
        <div />
      </main>
      <Countdown />
      <WhenWhere />
    </>
  );
}
