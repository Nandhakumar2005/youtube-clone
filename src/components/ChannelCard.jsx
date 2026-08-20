import { Link } from "react-router-dom";
import { cn } from "@/utils/cn";

function ChannelCard({ channelDetail, marginTop }) {
  if (!channelDetail) return null;

  return (
    <div className={cn("flex justify-center items-center w-full max-w-[340px] h-[300px] m-auto", marginTop)}>
      <Link to={`/channel/${channelDetail?.id?.channelId || channelDetail?.id}`} className="flex flex-col justify-center items-center text-center">
        <div className="w-[180px] h-[180px] mb-4 overflow-hidden rounded-full border-4 border-border/50 bg-secondary flex items-center justify-center transition-transform hover:scale-105 hover:border-primary/50 duration-300 shadow-lg">
          <img
            src={channelDetail?.snippet?.thumbnails?.high?.url || "https://dummyimage.com/180x180/ccc/fff"}
            alt={channelDetail?.snippet?.title}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-xl font-bold text-foreground">
          {channelDetail?.snippet?.title}
        </h3>
        {channelDetail?.statistics?.subscriberCount && (
          <p className="text-muted-foreground font-medium mt-1">
            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
          </p>
        )}
      </Link>
    </div>
  );
}

export default ChannelCard;
