import { ReactNode } from "react";

import styles from "./iconLabel.module.css";

type IconLabelPropos = {
  icon: ReactNode;
  value: string | number;
  label?: string;
  isLink?: boolean;
  preValue?: string;
};

export function IconLabel({
  icon,
  value,
  label,
  isLink = false,
  preValue = "",
}: IconLabelPropos) {
  if (value !== 0 && !value) return null;

  return (
    <span className={styles.container}>
      {!isLink ? (
        <>
          {icon} {value}
        </>
      ) : (
        <a
          href={preValue ? `${preValue}/${value}` : (value as string)}
          target="_blank"
          rel="noreferrer"
        >
          {icon} {value}
        </a>
      )}
      {label ? ` ${label}` : ""}
    </span>
  );
}
