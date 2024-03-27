import Image from "next/image";
import styles from "./info.module.css";
import program from "@/public/program.svg"

const Info = () => {
  return (
    <div className={styles.info}>
        <h1>Časovnica</h1>
        <Image src={program} alt="časovnica"/>
    </div>
  )
}

export default Info