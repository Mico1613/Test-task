import axios from "axios";
export default async function fetchPictures(page: number = 1) {
  const resp = await axios.get(
    `http://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=20`
  );
  return resp.data;
}
