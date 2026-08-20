import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import Videos from "../components/Videos";
import Loader from "../components/Loader";
import { Eye, ThumbsUp } from "lucide-react";

function VideoDetail() {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => {
        setVideoDetail(data.items[0]);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [id]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => {
        setRelatedVideos(data.items);
      })
      .catch((error) => console.error(error));
  }, [id]);

  if (loading || !videoDetail) {
    return (
      <div className="min-h-screen bg-background">
        <Loader />
      </div>
    );
  }

  const { snippet, statistics } = videoDetail;

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4 md:p-6 lg:p-8 min-h-[calc(100vh-4rem)] bg-background">
      {/* LEFT */}
      <div className="flex-1 max-w-6xl w-full mx-auto">
        <div className="relative pt-[56.25%] rounded-2xl overflow-hidden shadow-2xl bg-black border border-border/20 group">
          <iframe
            src={`https://www.youtube.com/embed/${id}`}
            title={snippet.title}
            allowFullScreen
            className="absolute inset-0 w-full h-full border-none"
          />
        </div>

        <div className="mt-6 bg-card p-4 md:p-6 rounded-2xl border border-border/50 shadow-sm">
          <h1 className="text-xl md:text-2xl font-bold text-foreground mb-4">
            {snippet.title}
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h3 className="text-lg text-primary font-semibold hover:opacity-80 transition-opacity cursor-pointer">
              {snippet.channelTitle}
            </h3>

            <div className="flex items-center gap-4 text-sm font-medium text-muted-foreground bg-secondary/50 py-2 px-4 rounded-full w-fit">
              <span className="flex items-center gap-1.5">
                <Eye className="w-4 h-4" />
                {Number(statistics.viewCount).toLocaleString()}
              </span>
              <div className="w-px h-4 bg-border" />
              <span className="flex items-center gap-1.5">
                <ThumbsUp className="w-4 h-4" />
                {Number(statistics.likeCount).toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full lg:w-[400px] xl:w-[450px] shrink-0">
        <h2 className="text-xl font-bold text-foreground mb-4 sticky top-20 bg-background/80 backdrop-blur-md py-2 z-10 border-b border-border/40">
          Related Videos
        </h2>
        <div className="h-[calc(100vh-12rem)] overflow-y-auto hidden-scrollbar pr-2">
          <Videos videos={relatedVideos} direction="column" />
        </div>
      </div>
    </div>
  );
}

export default VideoDetail;