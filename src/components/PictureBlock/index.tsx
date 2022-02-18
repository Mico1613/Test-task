import React, { memo, useCallback, useState } from "react";
import styles from "./PictureBlock.module.scss";
import Picture from "./Picture";
import Modal from "../Modal";
import IPictures from "../../types/IPictures";

type Props = {
  pictures: IPictures[];
  setPictures: React.Dispatch<React.SetStateAction<IPictures[]>>;
};

const PictureBlock = memo(({ pictures, setPictures }: Props) => {
  const [modalPic, setModalPic] = useState("");
  const [isModalOpened, setIsModalOpened] = useState(false);
  
  const onRemovePicture = useCallback((id: number) => {
    const newArr = pictures.filter((i) => i.id !== id);
    setPictures(newArr);
  }, [pictures]);

  const onSetModalPic = useCallback((url: string) => {
    setIsModalOpened(true);
    setModalPic(url);
  }, []);

  return (
    <ul className={styles.flex}>
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
    </ul>
  );
});
export default PictureBlock;
