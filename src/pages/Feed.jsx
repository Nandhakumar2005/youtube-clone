import { useState, useEffect } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import Sidebar from "../components/Sidebar";
import Videos from "../components/Videos";
import Loader from "../components/Loader";

function Feed() {
  const [videos, setVideos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("React");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => {
        setVideos(data.items);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [selectedCategory]);

  return (
    <div className="flex flex-col md:flex-row min-h-[calc(100vh-4rem)]">
      <Sidebar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-y-auto w-full">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
          {selectedCategory} <span className="text-primary">Videos</span>
        </h2>
        {loading ? <Loader /> : <Videos videos={videos} />}
      </main>
    </div>
  );
}

export default Feed;