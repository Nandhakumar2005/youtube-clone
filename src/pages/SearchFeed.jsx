import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import Videos from "../components/Videos";

function SearchFeed() {
  const { searchTerm } = useParams();

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => {
        setVideos(data.items);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [searchTerm]);

  return (
    <Box p={3}>
      <Typography variant="h5" mb={3}>
        Search Results for: {searchTerm}
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
}

export default SearchFeed;