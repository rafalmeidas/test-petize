import SearchDevs from "../../components/searchDevs";

import styles from "./header.module.css";

export default function Header() {
  return (
    <header data-testid="header" className={styles.container}>
      <SearchDevs isHeader />
    </header>
  );
}
