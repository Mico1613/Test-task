import React, { useEffect, useRef } from "react";
import styles from "./Modal.module.scss";
type Props = {
  url: string;
  setIsModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
};

function Modal({ url, setIsModalOpened }: Props) {
  const modalRef = useRef(null);
  const changeModalVisibility = (e: MouseEvent) => {
    const path = e.composedPath();
    if (path[0] === modalRef.current) {
      setIsModalOpened(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", changeModalVisibility);
    return () => {
      document.removeEventListener("click", changeModalVisibility);
    };
  }, []);

  return (
    <div className={styles.modal} ref={modalRef}>
      <img src={url} alt="#" />
    </div>
  );
}

export default Modal;
