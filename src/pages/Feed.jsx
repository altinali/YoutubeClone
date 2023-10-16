import { useContext } from "react";
import SideBar from "./../Components/SideBar";
import { YoutubeContext } from "../context/youtubeContext";
import VideoCard from "../Components/VideoCard";
import Loading from "../Components/Loading";
import SkeletonLoading from "../Components/SkeletonLoading";

const Feed = () => {
  const { videos } = useContext(YoutubeContext);

  return (
    <div className="flex gap-4">
      <SideBar />
      <div className="videos">
        {!videos ? (
          <SkeletonLoading />
        ) : (
          videos.map((video) => <VideoCard key={video.videoId} video={video} />)
        )}
      </div>
    </div>
  );
};

export default Feed;
