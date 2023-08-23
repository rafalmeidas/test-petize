import Paragraph from "../paragraph";

import { Repo } from "../../models/repo";

import styles from "./styles.module.css";
import { IconLabel } from "../iconLabel";
import { FaStar } from "react-icons/fa";
import { formatUpdatedDate } from "../../utils/dateFnsUtils";

type RepoInfoProps = {
  repo: Repo;
};

export default function RepoInfo({ repo }: RepoInfoProps) {
  function get(path: keyof Repo) {
    return repo[path];
  }

  return (
    <>
      <article className={styles.container}>
        <h3 className={styles.repoName}>{get("name")}</h3>
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
    </>
  );
}
