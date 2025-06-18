import styles from "./info.module.css";

const Info = () => {
  return (
    <div className={styles["info_mobile"]}>
      <p>14:30 Molitev rožnega venca</p>
      <p>15:00 Poročna maša</p>
      <p>18:00 Odhod proti ranču</p>
      <p>18:30 Aperitiv</p>
      <p>19:45 Postrežba juhe</p>
      <p>00:00 Torta</p>
      <p>00:30 Presenečenje</p>
      <p>Žur do jutranjih ur (02:00 burgerji)</p>
    </div>
  );
};

export default Info;
