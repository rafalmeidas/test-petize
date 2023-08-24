import styles from "./loader.module.css";

export default function Loader() {
  return (
    <div className={styles.loaderOverlay}>
      <div className={styles.loaderContainer}>
        <div className={styles.spinner}></div>
      </div>
    </div>
  );
}
