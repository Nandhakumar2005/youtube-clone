import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import Videos from "../components/Videos";
import Loader from "../components/Loader";

function SearchFeed() {
  const { searchTerm } = useParams();
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => {
        setVideos(data.items);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [searchTerm]);

  return (
    <div className="p-4 md:p-8 min-h-[calc(100vh-4rem)] bg-background">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
        Search Results for: <span className="text-primary">{searchTerm}</span>
      </h2>
      {loading ? <Loader /> : <Videos videos={videos} />}
    </div>
  );
}

export default SearchFeed;