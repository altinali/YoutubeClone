import millify from "millify";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const VideoCard = ({ video , desing}) => {
  const [isHover, setIsHover] = useState(false);
  const navigate = useNavigate()
  return (
    <div 
    onClick={() => navigate(`/watch?v=${video.videoId}`)}
    onMouseOver={() => setIsHover(true)}
    onMouseLeave={() => setIsHover(false)}
    className={`cursor-pointer ${desing}`}
    >
      <div>
        {/* resim alanı */}
        <img
          className="rounded-lg w-full h-full object-contain"
          src={
            isHover && video.richThumbnail
              ? video?.richThumbnail[0]?.url
              : video?.thumbnail[0]?.url
              
          }
        />
      </div>
      {/* alt detay alanı */}
      <div className="flex gap-4 mt-5">
        {
          desing ? '' : <img
          className="w-14 h-14 rounded-full"
          src={video.channelThumbnail[0]?.url}
        />
        }
        <div>
          <h4 className="font-bold">{video?.title}</h4>
          <p>{video?.channelTitle}</p>
          <div className="flex gap-2">
            <p>{millify(video?.viewCount)} Görüntülenme</p>
            <p>{video?.publishedTimeText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
