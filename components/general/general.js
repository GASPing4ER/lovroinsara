import Link from "next/link";
import styles from "./general.module.css";

const General = () => {
  return (
    <div className={styles.general}>
      <Link href="https://docs.google.com/spreadsheets/d/1TzdZfFJD3i_LUytazsLjrETfh3wUsEH3m0SXwEFdfGQ/edit?usp=sharing"><button>Potrditev udeležbe</button></Link>
      <Link href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=/maps/dir//parking%2Bkandija/data%3D!4m6!4m5!1m1!4e2!1m2!1m1!1s0x4764fffa73bc1db1:0x92f456afc82222b2%3Fsa%3DX%26ved%3D1t:3061%26ictx%3D111&ved=2ahUKEwj53oSevpeFAxWZhv0HHQD2D3cQ9Rd6BAhMEAM&usg=AOvVaw0udQv-DTrOHoXfiqpJIws5"><button>Parkirišče pred cerkvijo</button></Link>
      <Link href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=/maps/dir//hotel%2Bdolenjc/data%3D!4m6!4m5!1m1!4e2!1m2!1m1!1s0x4765005164e6483b:0x373076a384bb8804%3Fsa%3DX%26ved%3D1t:3061%26ictx%3D111&ved=2ahUKEwjl8aawuJeFAxW18QIHHRZuC0IQ9Rd6BAhQEAQ&usg=AOvVaw3YHFLEt8XhZw0B152NLnyB"><button>Lokacija praznovanja</button></Link>
    </div>
  );
};

export default General;
