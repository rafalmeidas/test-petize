import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

import { Button } from "../button";

import styles from "./searchDevs.module.css";

type SearchDevsProps = {
  isHeader?: boolean;
};

export default function SearchDevs({ isHeader = false }: SearchDevsProps) {
  const [search, setSearch] = useState<string>("");

  const inputRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  function onChangeSearch({ target }: ChangeEvent<HTMLInputElement>) {
    setSearch(target.value);
  }

  function onSearch() {
    if (search.trim() === "") return;

    navigate(`/profile/${search}`);
  }

  function onKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") onSearch();
  }

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  return (
    <div className={!isHeader ? styles.container : styles.containerHeader}>
      <h1
        className={`${styles.logoColor} ${
          !isHeader ? styles.logo : styles.logoHeader
        }`}
        onClick={() => isHeader && navigate("/home")}
      >
        Search <span className={styles.subLogo}>d_evs</span>
      </h1>

      <section
        className={
          !isHeader ? styles.containerSearch : styles.containerSearchHeader
        }
      >
        <div className={styles.containerInput}>
          <div className={styles.iconSearch}>
            <FiSearch />
          </div>
          <input
            ref={inputRef}
            type="text"
            name="search"
            aria-label="search"
            placeholder="Search"
            value={search}
            onChange={onChangeSearch}
            onKeyDown={onKeyDown}
          />
        </div>
        {!isHeader ? (
          <div className={styles.containerButton}>
            <Button type="button" onClick={onSearch}>
              Search
            </Button>
          </div>
        ) : null}
      </section>
    </div>
  );
}
