import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import Videos from "../components/Videos";

function VideoDetail() {
  const { id } = useParams();

  const [videoDetail, setVideoDetail] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => {
        setVideoDetail(data.items[0]);
      })
      .catch((error) => console.error(error));
  }, [id]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => {
        setRelatedVideos(data.items);
      })
      .catch((error) => console.error(error));
  }, [id]);

  if (!videoDetail) {
    return (
      <Typography sx={{ p: 3, color: "#606060" }}>
        Loading...
      </Typography>
    );
  }

  const { snippet, statistics } = videoDetail;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        gap: 4,
        p: 3,
        bgcolor: "#f9f9f9",
        minHeight: "100vh",
      }}
    >
      {/* LEFT */}
      <Box sx={{ flex: 1 }}>
        <Box
          sx={{
            position: "relative",
            pt: "56.25%",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
          }}
        >
          <iframe
            src={`https://www.youtube.com/embed/${id}`}
            title={snippet.title}
            allowFullScreen
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              border: "none",
            }}
          />
        </Box>

        <Typography
          variant="h5"
          sx={{
            mt: 2,
            fontWeight: "bold",
            color: "#0f0f0f",
          }}
        >
          {snippet.title}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mt: 1,
            color: "#606060",
            fontWeight: 600,
          }}
        >
          {snippet.channelTitle}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            mt: 1,
            color: "#606060",
          }}
        >
          👁 {Number(statistics.viewCount).toLocaleString()} views
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: "#606060",
          }}
        >
          👍 {Number(statistics.likeCount).toLocaleString()} likes
        </Typography>
      </Box>

      {/* RIGHT */}
      <Box
        sx={{
          width: {
            xs: "100%",
            lg: "360px",
          },
        }}
      >
        <Typography
          variant="h6"
          sx={{
            mb: 2,
            fontWeight: "bold",
            color: "#0f0f0f",
          }}
        >
          Related Videos
        </Typography>

        <Videos videos={relatedVideos} />
      </Box>
    </Box>
  );
}

export default VideoDetail;