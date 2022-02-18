import styles from "./Select.module.scss";
type Props = {
  selectValue: string;
  setSelectValue: React.Dispatch<React.SetStateAction<string>>;
};

function Select({ selectValue, setSelectValue }: Props) {
  const albumIdArr = Array(101)
    .fill(1)
    .map((i, index) => index);

  return (
    <div className={styles.flex}>
      <label htmlFor="select">AlbumId:</label>
      <select
        name="select"
        id="select"
        value={selectValue}
        onChange={(e: any) => setSelectValue(e.target.value)}
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
    </div>
  );
}

export default Select;
