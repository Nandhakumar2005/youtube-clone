import { Box } from "@mui/material";
import VideoCard from "./VideoCard";

function Videos({ videos }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
      }}
    >
      {videos
  ?.filter((video) => video.id?.videoId)
  .map((video) => (
    <VideoCard key={video.id.videoId} video={video} />
  ))}
    </Box>
  );
}

export default Videos;