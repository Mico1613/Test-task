import React from "react";
import usePictures from "../../hooks/usePictures";
import styles from "./Pagination.module.scss";
type Props = {};

function Pagination({}: Props) {
  const pages = Array(10)
    .fill(1)
    .map((i, index) => ++index);
  const [pictures, setPictures, page, setPage] = usePictures();

  return (
    <ul className={styles.flex}>
      {pages.map((item, index) => {
        return (
          <li
            key={`${item}_${index}`}
            onClick={() => setPage(item)}
            className={page === item ? styles.active : ""}
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
}

export default Pagination;
