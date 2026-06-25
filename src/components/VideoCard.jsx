import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

function VideoCard({ video }) {
  const snippet = video?.snippet;

  return (
    <Link
        to={`/video/${video?.id?.videoId}`}
        style={{ textDecoration: "none" }}
    >
        <Card
  sx={{
    width: 320,
    backgroundColor: "#1e1e1e",
    color: "white",
  }}
>
            <CardMedia
                component="img"
                height="180"
                image={snippet?.thumbnails?.high?.url}
                alt={snippet?.title}
            />
            <CardContent>
            <Typography variant="subtitle1" fontWeight="bold">
            {snippet?.title}
            </Typography>

            <Typography
  variant="body2"
  sx={{ color: "#aaa" }}
>
  {snippet.channelTitle}
</Typography>
            </CardContent>
        </Card>
    </Link>
  );
}

export default VideoCard;