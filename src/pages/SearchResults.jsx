import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getData } from "../utils/helpers";
import SideBar from "../Components/SideBar";
import Loading from "../Components/Loading";
import VideoCard from "../Components/VideoCard";
import SkeletonLoading from "../Components/SkeletonLoading";

const SearchResults = () => {
  const [params, setParams] = useSearchParams();
  const [results, setResults] = useState(null);

  const query = params.get("search_query");

  useEffect(() => {
    getData(`/search?query=${query}&type=video`).then((res) =>
      setResults(res.data.data)
    );

    console.log(results);
  }, [query]);

  return (
    <div className="flex">
      <SideBar desing={''}/>
      <div className="flex flex-col items-center w-full gap-5 p-5 h-screen overflow-auto">
        {!results ? (
          <SkeletonLoading skeleton={"grid grid-cols-2 justify-center max-w-lg p-4  rounded shadow animate-pulse md:p-6"}/>
        ) : (
          results.map((item, i) => {
            if (item.type !== "video") return;
            return <VideoCard 
            key={i} video={item} desing={'max-w-[700px] grid grid-cols-2 gap-5 '} />;
          })
        )}
      </div>
    </div>
  );
};

export default SearchResults;
