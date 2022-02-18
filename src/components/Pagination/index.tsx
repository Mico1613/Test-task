import React, { memo } from "react";
import styles from "./Pagination.module.scss";
type Props = {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
};

const Pagination = memo(({ setPage, page }: Props) => {
  const pages = Array(10)
    .fill(1)
    .map((i, index) => ++index);

  return (
    <ul className={styles.flex}>
      {pages.map((p, index) => {
        return (
          <li
            key={`${p}_${index}`}
            onClick={() => setPage(p)}
            className={page === p ? styles.active : ""}
          >
            {p}
          </li>
        );
      })}
    </ul>
  );
});

export default Pagination;
