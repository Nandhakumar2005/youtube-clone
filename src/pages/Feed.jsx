import { useState, useEffect } from "react";
import { Box } from "@mui/material";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import Sidebar from "../components/Sidebar";
import Videos from "../components/Videos";

function Feed() {
  const [videos, setVideos] = useState([]);
  const [selectedCategory, setSelectedCategory] =
  useState("React");

 useEffect(() => {
  fetchFromAPI(
    `search?part=snippet&q=${selectedCategory}`
  )
    .then((data) => {
      setVideos(data.items);
    })
    .catch((error) => {
      console.error(error);
    });
}, [selectedCategory]);

  return (
    <Box sx={{ 
    display: "flex",
    background:"#f9f9f9",
    minHeight: "100vh", }}>
      <Sidebar
  selectedCategory={selectedCategory}
  setSelectedCategory={setSelectedCategory}
/>

      <Box sx={{ flex: 1, p: 3 }}>
        <Videos videos={videos} />
      </Box>
    </Box>
  );
}

export default Feed;