import { ReactNode } from "react";

import styles from "./styles.module.css";

type IconLabelPropos = {
  icon: ReactNode;
  value: string | number;
  label?: string;
};

export function IconLabel({ icon, value, label }: IconLabelPropos) {
  if (value !== 0 && !value) return null;

  return (
    <span className={styles.container}>
      {icon} {value}
      {label ? ` ${label}` : ""}
    </span>
  );
}
