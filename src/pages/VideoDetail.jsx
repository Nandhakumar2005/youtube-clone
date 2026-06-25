import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import Videos from "../components/Videos";

function VideoDetail() {
  const { id } = useParams();

  const [videoDetail, setVideoDetail] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);

  // Fetch video details
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => {
        setVideoDetail(data.items[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  // Fetch related videos
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => {
        setRelatedVideos(data.items);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  if (!videoDetail) {
    return <Typography p={3}>Loading...</Typography>;
  }

  const { snippet, statistics } = videoDetail;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: 3,
        p: 3,
      }}
    >
      {/* LEFT: VIDEO PLAYER + INFO */}
      <Box sx={{ flex: 1 }}>
        <Box
          sx={{
            position: "relative",
            paddingTop: "56.25%",
          }}
        >
          <iframe
            src={`https://www.youtube.com/embed/${id}`}
            title={snippet.title}
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: "none",
            }}
          />
        </Box>

        <Typography variant="h5" mt={2}>
          {snippet.title}
        </Typography>

        <Typography variant="body1">
          {snippet.channelTitle}
        </Typography>

        <Typography variant="body2">
          Views: {statistics.viewCount}
        </Typography>

        <Typography variant="body2">
          Likes: {statistics.likeCount}
        </Typography>
      </Box>

      {/* RIGHT: RELATED VIDEOS */}
      <Box sx={{ width: { xs: "100%", md: "350px" } }}>
        <Typography variant="h6" mb={2}>
          Related Videos
        </Typography>

        <Videos videos={relatedVideos} />
      </Box>
    </Box>
  );
}

export default VideoDetail;