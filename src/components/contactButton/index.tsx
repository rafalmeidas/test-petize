import { Button } from "../button";

import { User } from "../../models/user";

import styles from "./contactButton.module.css";

type ContactButtonProps = {
  user: User;
};

export default function ContactButton({ user }: ContactButtonProps) {
  if (!user?.twitter_username) return null;

  return (
    <div className={styles.containerContact}>
      <Button>
        <a
          href={`https://twitter.com/${user.twitter_username}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Contato
        </a>
      </Button>
    </div>
  );
}
