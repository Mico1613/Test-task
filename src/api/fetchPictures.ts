import axios from "axios";
export default async function fetchPictures(
  page: number = 1,
  albumId?: number
) {
  const resp = await axios.get(
    `http://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=40&${
      albumId && `albumId=${albumId}`
    }`
  );
  return resp.data;
}
