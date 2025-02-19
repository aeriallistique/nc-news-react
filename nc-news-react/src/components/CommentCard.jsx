import { useState } from "react";
import { timeAgo } from "../utils/utils";
import { deleteComment } from "../utils/utils";
import ErrorMessage from "./ErrorMessage";

const CommentCard = ({ comment, userAvatar, loggedInUser, setHasCommentDeleted }) => {
  const [isError, setIsError] = useState(false);

  const showButton = () => {
    return (<button
      onClick={(e) => { handleDeleteClick(e); }}
      value={comment.comment_id}
      className="text-xs font-medium cursor-pointer px-2 bg-red-400 text-white hover:underline hover:bg-red-500 rounded-sm transition-all duration-150 disabled:bg-red-200 disabled:cursor-not-allowed"
    >
      Delete Comment
    </button>);
  };

  const handleDeleteClick = (e) => {
    e.preventDefault();
    e.target.disabled = true;
    setHasCommentDeleted(e.target.value);
    deleteComment(`/comments/${e.target.value}`)
      .then(resp => setHasCommentDeleted(true))
      .catch(err => {
        setIsError(err.message);
      });

  };


  return (
    <div className="bg-white shadow-xl rounded-2xl p-4 w-full max-w-md mb-4 hover:shadow-2xl hover: cursor-pointer">
      <div className="flex items-center mb-3">
        <img
          src={userAvatar}
          alt={comment.author}
          className="w-10 h-10 rounded-full mr-4 overflow-hidden border"
        />

        <div>
          <p className="font-semibold text-gray-800">{comment.author}</p>
          <p className="text-xs text-gray-500">{timeAgo(comment.created_at)}</p>
        </div>
      </div>
      {isError ? <ErrorMessage message={isError} /> : <p className="text-gray-700 mb-4">{comment.body}</p>
      }
      <div className={loggedInUser.username === comment.author ? "flex justify-between" : "flex justify-end"}>
        {loggedInUser.username === comment.author ? showButton() : null}
        <button className="cursor-pointer group ">
          <svg className='w-8 h-8 transition-all duration-200 transform group-hover:scale-110' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21s-6.5-4.33-10-9.5C-1.5 6.67 2 2 6.5 2 9 2 12 5 12 5s3-3 5.5-3C22 2 25.5 6.67 22 11.5c-3.5 5.17-10 9.5-10 9.5z" fill="red" className="transition-colors duration-200 group-hover:fill-red-700" />
            <text x="50%" y="60%" fontSize="10" fontFamily="Arial" fontWeight="bold" fill="white" textAnchor="middle" alignmentBaseline="middle">{comment.votes}</text>
          </svg>
        </button>
      </div>
    </div>
  );
};
export default CommentCard;