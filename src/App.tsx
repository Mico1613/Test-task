import React, { useState } from "react";
import styles from "./App.module.scss";
import Pagination from "./components/Pagination";
import PictureBlock from "./components/PictureBlock";
import Select from "./components/Select";
import fetchPictures from "./api/fetchPictures";
import IPictures from "./types/IPictures";

function App() {
  const [page, setPage] = React.useState(1);
  const [pictures, setPictures] = useState<IPictures[]>([]);
  const [selectValue, setSelectValue] = useState<string>("");
  
  async function getPictures(page: number, selectValue: string) {
    const data = await fetchPictures(page, parseInt(selectValue));
    setPictures(data);
  }
  React.useEffect(() => {
    getPictures(page, selectValue);
  }, [page, selectValue]);

  return (
    <div className={styles.wrapper}>
      <Select selectValue={selectValue} setSelectValue={setSelectValue} setPage={setPage}/>
      <PictureBlock pictures={pictures} setPictures={setPictures} />
      <Pagination setPage={setPage} page={page} />
    </div>
  );
}

export default App;
