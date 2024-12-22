import Link from "next/link";
import styles from "./general.module.css";

const General = () => {
  return (
    <div className={styles.general}>
      <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdHHWW-rA558s9QW2plB046g4NJMCX65cPnJ97fk0zgE440MQ/viewform">
        <button>Potrditev udeležbe</button>
      </Link>
      <Link href="https://docs.google.com/spreadsheets/d/1KC-GraEexQispk2GsdejHyLSgQp_G6lDSL60sl4m2sY/edit">
        <button>Ideje za darila</button>
      </Link>
      <Link href="https://maps.app.goo.gl/9EvKWwj1NvYkY67aA?g_st=com.google.maps.preview.copy">
        <button>Lokacija praznovanja</button>
      </Link>
    </div>
  );
};

export default General;
