import Image from "next/image";
import styles from "./info.module.css";
import program from "@/public/program.svg";

const Info = () => {
  return (
    <>
      <div className={styles.coming_soon}>VEČ INFORMACIJ KMALU!</div>
      {/* <div className={styles.info}>
        <Image src={program} alt="časovnica" />
      </div>
      <div className={styles["info_mobile"]}>
        <h1>14:30 Zbor svatov na parkirišču</h1>
        <h1>15:00 Cerkvena poroka</h1>
        <h1>16:00 Pogostitev po obredu</h1>
        <h1>18:00 Zbor svatov pred hotelom Dolenj’c</h1>
        <h1>18:15 Prihod ženina in neveste, čestitke</h1>
        <h1>19:30 Slavnostni prihod v dvorano</h1>
        <h1>19:45 Juha in topla predjed</h1>
        <h1>20:30 Prvi ples in program</h1>
        <h1>21:30 Glavna jed</h1>
        <h1>22:00 Program</h1>
        <h1>23:30 Torta</h1>
      </div> */}
    </>
  );
};

export default Info;
