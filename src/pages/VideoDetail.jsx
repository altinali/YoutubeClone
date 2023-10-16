import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { getData } from "../utils/helpers"
import ReactPlayer from "react-player"
import VideoInfo from "../Components/VideoInfo"
import VideoCard from "../Components/VideoCard"
import Comments from "../Components/Comments"


const VideoDetail = () => {
  const [searchParams] = useSearchParams()
  const [related,setRelated] = useState(null)
  const [comments,setComments] = useState(null)
  const id = searchParams.get('v')


  useEffect(() => {
  
    // Videoyla alakalı içerikleri getirir
    getData(`/related?id=${id}`)
    .then((res) => setRelated(res.data.data))
    
  },[])

    
  return (
    <div className=" h-[90vh] overflow-auto flex flex-col lg:flex-row lg:px-[100p] gap-5 p-4">
      <div className=" flex flex-col gap-2">
      <div className="w-full">
        <ReactPlayer controls url={`https://www.youtube.com/watch?v=${id}`}
        width={'100%'}
        height={'470px'}/>

        {<VideoInfo id={id}/>}
      </div>
      <div>
        <Comments id={id}/>
      </div>
      </div>
      <div className="flex flex-col gap-10 lg:max-w-[400px] sm:m-auto lg:h-screen lg:overflow-auto">
        {!related ? '...' : related.map((item,i) => {
          
          if(item.type !== "video") return;
          return(
            <VideoCard key={i} video={item}/>
          )

        })}
      </div>
    </div>
  )
}

export default VideoDetail
