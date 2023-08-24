import styles from "./alert.module.css";

type AlertProps = {
  message: string;
};

export default function Alert({ message }: AlertProps) {
  return (
    <section className={styles.alert}>
      <div className={styles.centeredContent}>{message}</div>
    </section>
  );
}
