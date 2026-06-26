import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

function VideoCard({ video }) {
  const snippet = video?.snippet;
  const videoId = video?.id?.videoId;

  if (!videoId) return null;

  return (
    <Link
      to={`/video/${videoId}`}
      style={{ textDecoration: "none" }}
    >
      <Card
        sx={{
          width: 340,
          bgcolor: "#ffffff",
          color: "#0f0f0f",
          borderRadius: "12px",
          boxShadow: "none",
          transition: "0.25s",

          "&:hover": {
            transform: "scale(1.02)",
            boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
          },
        }}
      >
        <CardMedia
          component="img"
          height="190"
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{
            borderTopLeftRadius: "12px",
            borderTopRightRadius: "12px",
          }}
        />

        <CardContent>
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            sx={{
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            {snippet?.title}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: "#606060",
              mt: 1,
            }}
          >
            {snippet?.channelTitle}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}

export default VideoCard;