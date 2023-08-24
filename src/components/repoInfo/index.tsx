import { FaStar } from "react-icons/fa";
import Paragraph from "../paragraph";

import { IconLabel } from "../iconLabel";

import { Repo } from "../../models/repo";

import { formatUpdatedDate } from "../../utils/dateFnsUtils";

import styles from "./repoInfo.module.css";

type RepoInfoProps = {
  repo: Repo;
};

export default function RepoInfo({ repo }: RepoInfoProps) {
  function get(path: keyof Repo) {
    return repo[path];
  }

  return (
    <article className={styles.container}>
      <a href={get("html_url") as string} target="_blank" rel="noreferrer">
        <h3 className={styles.repoName}>{get("name")}</h3>
      </a>
      <Paragraph>
        {get("description") ? get("description") : "Sem descrição."}
      </Paragraph>
      <div className={styles.info}>
        <IconLabel icon={<FaStar />} value={get("stargazers_count")} />
        <span className={styles.pseudo}>
          {formatUpdatedDate(get("updated_at") as string)}
        </span>
      </div>
    </article>
  );
}
