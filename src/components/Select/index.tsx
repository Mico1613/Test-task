import React, { ChangeEvent, memo} from "react";
import styles from "./Select.module.scss";
type Props = {
  selectValue: string;
  setSelectValue: React.Dispatch<React.SetStateAction<string>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

const Select = memo(({ selectValue, setSelectValue, setPage }: Props) => {

  const albumIdArr = Array(101)
    .fill(1)
    .map((i, index) => index);

  function onResetSelect() {
    setSelectValue("");
  }

  function onSelectValue(e: ChangeEvent<HTMLSelectElement>) {
    setSelectValue(e.target.value);
    setPage(1);
  }

  return (
    <div className={styles.flex}>
      <label htmlFor="select">AlbumId:</label>
      <select
        name="select"
        id="select"
        value={selectValue}
        onChange={(e) => onSelectValue(e)}
      >
        {albumIdArr.map((i, index) => {
          return i === 0 ? (
            <option value="" disabled hidden key={`${i}_${index}`}>
              Choose album id
            </option>
          ) : (
            <option value={i} key={`${i}_${index}`}>
              {i}
            </option>
          );
        })}
      </select>
      <button onClick={onResetSelect}>Reset</button>
    </div>
  );
});

export default Select;
