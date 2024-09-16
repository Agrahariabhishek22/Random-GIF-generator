import axios from 'axios';
import React, { useEffect, useState } from 'react'


const API_KEY = "dGrYzO6z47DjnM6DNy9OLT0Q8WOhoMxW";
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {
    const [gif, setGif] = useState("");
  const [loader, setLoader] = useState(false);

  async function fetchData(tag) {
    setLoader(true);
    const { data } = await axios.get(tag?`${url}&tag=${tag}`:url)
    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource);
    setLoader(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return {gif,loader,fetchData};

}

export default useGif
