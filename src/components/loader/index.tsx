import styles from "./loader.module.css";

export default function Loader() {
  return (
    <div className={styles.loaderOverlay} data-testid="loader-overlay">
      <div className={styles.loaderContainer} data-testid="loader-container">
        <div className={styles.spinner} data-testid="spinner"></div>
      </div>
    </div>
  );
}
