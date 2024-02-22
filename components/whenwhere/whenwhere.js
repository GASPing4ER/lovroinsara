import styles from "./whenwhere.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChurch, faCake } from "@fortawesome/free-solid-svg-icons";

const WhenWhere = () => {
  return (
    <div className={styles.whenwhere}>
      <h1>Kje & Kdaj</h1>
      <p>
        Pridruži se nama in praznuj najin poseben dan! Z velikim veseljem te
        vabiva, da se nama pridružiš ob najinem poročnem slavju!
      </p>
      <div className={styles.details}>
        <div className={styles.detail}>
          <FontAwesomeIcon icon={faChurch} className={styles.icon} />
          <h2>Cerkvena poroka</h2>
          <hr />
          <p>Datum: 20.04.2024</p>
          <p>Ura: 15:00</p>
          <p>Lokacija: Frančiškanski trg 1, Novo mesto</p>
        </div>
        <div className={styles.detail}>
          <FontAwesomeIcon icon={faCake} className={styles.icon} />
          <h2>Praznovanje</h2>
          <hr />
          <p>Datum: 20.04.2024</p>
          <p>Ura: 19:00</p>
          <p>Lokacija: Na Brezovici 50, Novo mesto</p>
        </div>
      </div>
    </div>
  );
};

export default WhenWhere;
