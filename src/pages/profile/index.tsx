import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AxiosResponse } from "axios";

import UserInfo from "../../components/userInfo";
import RepoInfo from "../../components/repoInfo";

import { getRepos, getUser } from "../../services/usersService";

import { User } from "../../models/user";
import { Repo } from "../../models/repo";

import styles from "./profile.module.css";

function Profile() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [user, setUser] = useState<User | null>(null);
  const [repos, setRepos] = useState<Repo[]>([]);

  const { username } = useParams();

  const hasServiceFail = (
    result: PromiseSettledResult<AxiosResponse<User | Repo[]>>
  ) => {
    return result.status === "rejected";
  };

  const getData = (res: PromiseSettledResult<AxiosResponse<User | Repo[]>>) => {
    return res.status === "fulfilled" ? res.value.data : null;
  };

  const handleAllSettled = useCallback(
    ([res1, res2]: PromiseSettledResult<AxiosResponse<User | Repo[]>>[]) => {
      if (hasServiceFail(res1) || hasServiceFail(res2)) return;

      setUser(getData(res1) as User);
      setRepos(
        (getData(res2) as Repo[]).sort(
          (a, b) => b.stargazers_count - a.stargazers_count
        )
      );
    },
    []
  );

  const loadApi = useCallback(() => {
    if (!username) return;

    setIsLoading(true);
    Promise.allSettled([getUser(username), getRepos(username)])
      .then(handleAllSettled)
      .finally(() => setIsLoading(false));
  }, [username, handleAllSettled]);

  useEffect(() => {
    loadApi();
  }, [loadApi]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.container1}>
          {user && <UserInfo user={user} />}
        </div>
        <div className={styles.container2}>
          {repos &&
            repos.map((repo, index) => (
              <RepoInfo repo={repo} key={`repo-${index}`} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
