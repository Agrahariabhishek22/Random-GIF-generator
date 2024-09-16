import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import axios from "axios";
import useGif from "../hooks/useGif";


const Tag = () => {
  // const API_KEY = "dGrYzO6z47DjnM6DNy9OLT0Q8WOhoMxW";
  // const [gif, setGif] = useState("");
  // const [loader, setLoader] = useState(true);
  
  // async function fetchData() {
  //   setLoader(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&&tag=${tag}`;
    
  //   const { data } = await axios.get(url);
  //   const imageSource = data.data.images.downsized_large.url;
  //   setGif(imageSource);
  //   setLoader(false);
  // }
  
  // useEffect(() => {
  //   fetchData();
  // }, []);
  
  const [tag, setTag] = useState("Cat");
  const {gif,loader,fetchData}=useGif(tag);

  return (
    <div className="bg-blue-500 flex flex-col item-center w-2/5 mt-6 rounded-lg border border-black gap-y-4 mb-10">
      <h1 className="text-center mt-[15px] font-bold underline text-2xl">Random {tag} GiF</h1>

      {loader ? <Spinner /> : <img src={gif} alt="" width={450} className="mx-auto" />}

      <input type="text" onChange={(event) => setTag(event.target.value)} className="w-2/4 mx-auto text-center rounded-lg py-1.5" />

      <button
        onClick={() => fetchData(tag)}
        className="bg-gray-300 rounded-lg font-semibold text-xl w-4/5 py-2 mb-[20px] mx-auto "
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;
