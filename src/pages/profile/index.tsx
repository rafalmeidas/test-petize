import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AxiosResponse } from "axios";

import { Button } from "../../components/button";
import UserInfo from "../../components/userInfo";
import RepoInfo from "../../components/repoInfo";
import Loader from "../../components/loader";

import { getRepos, getUser } from "../../services/usersService";

import { User } from "../../models/user";
import { Repo } from "../../models/repo";

import styles from "./profile.module.css";
import Alert from "../../components/alert";

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

    setUser(null);
    setRepos([]);
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
      {isLoading ? <Loader /> : null}
      {user ? (
        <div className={styles.content}>
          <div>
            <div className={styles.container1}>
              {user && <UserInfo user={user} />}
            </div>
            <div className={styles.containerContact}>
              <Button>Contato</Button>
            </div>
          </div>

          <div className={styles.container2}>
            {repos.length > 0 ? (
              repos.map((repo, index) => (
                <RepoInfo repo={repo} key={`repo-${index}`} />
              ))
            ) : (
              <Alert message="Não existem repositórios disponíveis para exibição." />
            )}
          </div>
        </div>
      ) : (
        <section className={styles.alert}>
          <Alert message="Usuário pesquisado não existe. Você pode pesquisar outro usuário 😄." />
        </section>
      )}
    </div>
  );
}

export default Profile;
