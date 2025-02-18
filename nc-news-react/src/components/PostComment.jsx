import { useState, useContext } from "react";
import axios from "axios";
import { UserAccount } from "../context/UsersContext";
import ErrorMessage from "./ErrorMessage";

const PostComment = ({ articleID }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isError, setIsError] = useState(null);
  const [textareaInput, setTextareaInput] = useState('');
  const { loggedInUser } = useContext(UserAccount);


  const handleFormvVisibility = (e) => setIsFormVisible((current) => !current);

  const handlePostComment = (e) => {
    e.preventDefault();
    setTextareaInput('');
    setIsFormVisible(false);
    axios.post(`https://andis-news-app.onrender.com/api/articles/${articleID}/comments`, { username: loggedInUser.username, body: textareaInput })
      .catch(err => setIsError(err.message));
  };


  if (isError) { return <ErrorMessage message={isError} />; }
  return (
    <header className={!isFormVisible ? "w-full mt-4 flex flew-row justify-around items-center relative lg:flex-col" : " flex flex-col items-center border-amber-950"}>
      <h2 className="">Comments: </h2>

      <div className={isFormVisible ? "text-center mt-4" : ""} >
        <button
          className="bg-red-100 p-0.5 cursor-pointer hover:bg-red-500 transition-all duration-150 hover:text-white rounded-md"
          onClick={(e) => { handleFormvVisibility(e); }}
        >
          Add Comment
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 inline pointer-events-none"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
        <form action="submit" className={!isFormVisible ? "hidden" : "h-64 p-8 z-50 bg-white border border-orange-400"}>

          <textarea
            value={textareaInput}
            onChange={(e) => { setTextareaInput(e.target.value); }}
            type="text"
            col="10"
            rows={5}
            placeholder="Your Comment here..."
            className="w-full border border-transparent  border-b-red-500 p-1 mb-1"
          />
          <button
            disabled={textareaInput.length === 0 ? true : false}
            onClick={(e) => { handlePostComment(e); }}
            className="bg-red-500 p-1 text-white rounded-md cursor-pointer disabled:bg-red-200"

          >
            Post Comment
          </button>
        </form>
      </div>
    </header>
  );
};
export default PostComment;