import SearchDevs from "../../components/searchDevs";

import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.container}>
      <SearchDevs isHeader />
    </header>
  );
}
