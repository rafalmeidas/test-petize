import { HTMLProps } from "react";

import styles from "./paragraph.module.css";

export default function Paragraph({
  ...rest
}: HTMLProps<HTMLParagraphElement>) {
  return <p className={styles.paragraph} {...rest} />;
}
