import { ChangeEvent, KeyboardEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

import { Button } from "../../components/button";

import styles from "./home.module.css";

function Home() {
  const [search, setSearch] = useState<string>("");

  const navigate = useNavigate();

  function onChangeSearch({ target }: ChangeEvent<HTMLInputElement>) {
    setSearch(target.value);
  }

  function onSearch() {
    if (search.trim() === "") return;

    navigate(`/${search}`);
  }

  function onKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") onSearch();
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.logo}>
        Search <span className={styles.subLogo}>d_evs</span>
      </h1>
      <div className={styles.containerSearch}>
        <div className={styles.containerInput}>
          <div className={styles.iconSearch}>
            <FiSearch />
          </div>
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={onChangeSearch}
            onKeyDown={onKeyDown}
          />
        </div>
        <div className={styles.containerButton}>
          <Button type="button" onClick={onSearch}>
            Search
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
