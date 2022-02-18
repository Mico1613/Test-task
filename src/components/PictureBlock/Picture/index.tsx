import React from "react";
import { IPicture } from "../../../hooks/usePictures";
import styles from "./Picture.module.scss";

type Props = {
  url: string;
  thumbnailUrl: string;
  id: number;
  onRemovePicture: (id: number) => void;
  onSetModalPic: (url: string) => void;
};

function Picture({
  url,
  thumbnailUrl,
  id,
  onRemovePicture,
  onSetModalPic,
}: Props) {
  return (
    <div className={styles.wrapper}>
      <span className={styles.remove} onClick={() => onRemovePicture(id)}>
        Delete
      </span>
      <button onClick={() => onSetModalPic(url)}>
        <img src={thumbnailUrl} alt="#" />
      </button>
    </div>
  );
}

export default Picture;
