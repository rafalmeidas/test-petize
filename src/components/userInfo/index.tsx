import {
  FaRegBuilding,
  FaRegEnvelope,
  FaRegHeart,
  FaTwitter,
  FaUsers,
  FaLink,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

import { IconLabel } from "../iconLabel";
import Paragraph from "../paragraph";

import { User } from "../../models/user";

import styles from "./userInfo.module.css";

type UserInfoProps = {
  user: User;
};

export default function UserInfo({ user }: UserInfoProps) {
  function get(path: keyof User) {
    return user[path];
  }

  return (
    <>
      <section className={styles.container}>
        <div className={styles.containerAvatar}>
          <img src={user?.avatar_url} alt={user?.name} />
          <div className={styles.containerInfo}>
            <span className={styles.name}>{user?.name}</span>
            <span className={styles.login}>@{user?.login}</span>
          </div>
        </div>

        <Paragraph>{user.bio}</Paragraph>

        <div className={styles.options}>
          <IconLabel
            icon={<FaUsers />}
            value={get("followers")}
            label="seguidores"
          />
          <IconLabel
            icon={<FaRegHeart />}
            value={get("following")}
            label="seguindo"
          />
        </div>

        <div className={styles.options}>
          <IconLabel icon={<FaRegBuilding />} value={get("company")} />
          <IconLabel icon={<FaLocationDot />} value={get("location")} />
          <IconLabel icon={<FaRegEnvelope />} value={get("email")} />
          <IconLabel icon={<FaLink />} value={get("blog")} isLink />
          <IconLabel
            icon={<FaTwitter />}
            value={get("twitter_username")}
            isLink
            preValue="https://twitter.com"
          />
        </div>
      </section>
    </>
  );
}
