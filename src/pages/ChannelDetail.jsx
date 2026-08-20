import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import ChannelCard from "../components/ChannelCard";
import Videos from "../components/Videos";
import Loader from "../components/Loader";

function ChannelDetail() {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]))
      .catch((error) => console.error(error));

    fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`)
      .then((data) => setVideos(data?.items))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading || !channelDetail) return <div className="min-h-screen"><Loader /></div>;

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-background">
      <div
        className="h-[250px] md:h-[300px] w-full bg-cover bg-center"
        style={{
          background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(93,9,121,1) 35%, rgba(0,212,255,1) 100%)",
        }}
      />
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="-mt-[120px] mb-8">
          <ChannelCard channelDetail={channelDetail} />
        </div>
        <div className="pb-8">
          <Videos videos={videos} />
        </div>
      </div>
    </div>
  );
}

export default ChannelDetail;
