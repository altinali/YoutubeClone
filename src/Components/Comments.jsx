import { useEffect, useState } from "react";
import { getData } from "../utils/helpers";
import Loading from "./Loading";
import { AiFillLike, AiFillDislike } from "react-icons/ai";

const Comments = ({ id }) => {
  const [comments, setComments] = useState(null);
  const [expand,setExpand] = useState(null)


  useEffect(() => {
    getData(`/comments?id=${id}`).then((res) => setComments(res.data.data));
  }, []);
  
  let shortComments = comments

  if (comments?.length > 3 && !expand) {
    shortComments = comments.slice(0,3)
  }

  return (
    <div className="mb-5">
      {!comments ? (
        <Loading />
      ) : (
        shortComments.map((comment, i) => {
          return (
            <div className="bg-[#383838]" key={i}>
              <div className="flex mb-5 gap-2 items-center">
                <h3 className="text-lg text-bold">{comment.authorText}</h3>
                <span className="text-opacity-5">
                  {comment.publishedTimeText}
                </span>
              </div>
              <p>{comment.textDisplay}</p>
              <div className="flex gap-3 mt-2 items-center">
                <div className="hover:bg-[#535353] p-1 rounded-full cursor-pointer">
                  <AiFillLike />
                </div>
                <div className="hover:bg-[#535353] p-1 rounded-full cursor-pointer">
                  <AiFillDislike />
                </div>

                <div className="hover:bg-[#535353] p-1 rounded-full cursor-pointer">
                  <button>Yanıtla</button>
                </div>
              </div>
              
            </div>
          );
        })
      )}
            <p onClick={() => setExpand(!expand)} className="text-end bg-[#383838] cursor-pointer pr-3">
                {
                    !expand ? 'Daha fazla...' : 'Daha Az...'
                }
            </p>

    </div>
  );
};

export default Comments;
