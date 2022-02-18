import React, { useState } from "react";
import styles from "./PictureBlock.module.scss";
import usePictures from "../../hooks/usePictures";
import Picture from "./Picture";
import Modal from "../Modal";

type Props = {};

function PictureBlock({}: Props) {
  const [modalPic, setModalPic] = useState("");
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [pictures, setPictures] = usePictures();
  function onRemovePicture(id: number) {
    const newArr = pictures.filter((i) => i.id !== id);
    setPictures(newArr);
  }
  function onSetModalPic(url: string) {
    setIsModalOpened(true);
    setModalPic(url);
  }
  return (
    <div className={styles.flex}>
      {pictures.map((pic, index) => {
        return (
          <Picture
            key={`${pic.id}_${index}`}
            id={pic.id}
            url={pic.url}
            thumbnailUrl={pic.thumbnailUrl}
            onRemovePicture={onRemovePicture}
            onSetModalPic={onSetModalPic}
          />
        );
      })}
      {isModalOpened && (
        <Modal url={modalPic} setIsModalOpened={setIsModalOpened} />
      )}
    </div>
  );
}

export default PictureBlock;
