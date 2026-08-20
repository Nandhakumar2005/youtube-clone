import { Link } from "react-router-dom";
import { Play } from "lucide-react";
import { cn } from "@/utils/cn";

function VideoCard({ video }) {
  const snippet = video?.snippet;
  const videoId = video?.id?.videoId;

  if (!videoId) return null;

  return (
    <Link to={`/video/${videoId}`} className="group block w-full max-w-[340px] mx-auto md:mx-0">
      <div className={cn(
        "relative rounded-xl overflow-hidden bg-card border border-border/50",
        "transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
      )}>
        <div className="relative aspect-video overflow-hidden">
          <img
            src={snippet?.thumbnails?.high?.url}
            alt={snippet?.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <div className="bg-primary/90 text-primary-foreground p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <Play fill="currentColor" className="w-6 h-6 ml-1" />
            </div>
          </div>
        </div>

        <div className="p-4">
          <h3 className="font-semibold text-foreground line-clamp-2 leading-snug mb-2 group-hover:text-primary transition-colors">
            {snippet?.title}
          </h3>
          <p className="text-sm text-muted-foreground font-medium">
            {snippet?.channelTitle}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default VideoCard;