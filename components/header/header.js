import Image from "next/image";
import styles from "./header.module.css";

import logo from "@/public/logo-2.png";
import Nav from "../nav/nav";

const Header = () => {
  return (
    <header className={styles.header}>
      <Image src={logo} alt="logo" priority />
      <Nav />
      <div />
    </header>
  );
};

export default Header;
