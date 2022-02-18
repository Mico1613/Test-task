import { useEffect, useState } from "react";
import fetchPictures from "../api/fetchPictures";
export interface IPicture {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
export default function usePictures() {
  const [pictures, setPictures] = useState<IPicture[]>([]);
  const [page, setPage] = useState(1);
  async function onSetPictures(page?: number) {
    const pics = await fetchPictures(page);
    setPictures(pics);
  }
  useEffect(() => {
    onSetPictures(page);
  }, [page]);

  return [pictures, setPictures, setPage] as const;
}
