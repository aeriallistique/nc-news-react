import { useEffect, useState, useContext } from "react";
import Navbar from "../components/Navbar";
import { getArticleComments, getUsers } from "../utils/utils";
import { useLocation } from "react-router-dom";
import Spinner from "../components/Spinner";
import CommentCard from "../components/CommentCard";
import { UsersAccounts } from "../context/UsersContext";
import Footer from "../components/Footer";
import PostComment from "../components/PostComment";

const CommentsPage = () => {
  const location = useLocation();
  const articleIDwComment = location.pathname; //this has forward slash in it
  const articleID = articleIDwComment.split('/')[1];

  const [comments, setComments] = useState(null);
  const [hasCommentPosted, setHasCommentPosted] = useState(null);
  const { usersAccounts, setUsersAccounts } = useContext(UsersAccounts);
  const [showSuccessSpan, setShowSuccessSpan] = useState(false);

  useEffect(() => {

    getArticleComments(`/articles${articleIDwComment}`).then(resp => setComments(resp));
    getUsers().then(resp => setUsersAccounts(resp));
  }, []);

  useEffect(() => {
    displaySuccesSpan();
    getArticleComments(`/articles${articleIDwComment}`).then(resp => {
      setComments(resp);
    });
  }, [hasCommentPosted]);

  const displaySuccesSpan = () => {
    if (hasCommentPosted) {
      setShowSuccessSpan(true);
      setTimeout(() => {
        setShowSuccessSpan(false);
      }, 1500);
    }
  };


  return (<>
    <div className="main-container w-11/12 h-auto m-auto relative">
      <Navbar />
      <span className={showSuccessSpan ? "absolute top-30 lg:top-35 text-black text-2xl font-bold flex items-center justify-center  h-50 w-full bg-green-200 rounded z-50 opacity-80" : "hidden"}>Success !!!</span>
      <PostComment articleID={articleID} setHasCommentPosted={setHasCommentPosted} />

      <main className="flex flex-col justify-center items-center lg:grid lg:grid-cols-2 lg:place-items-center">

        {comments ? comments.map(comment => {
          let userAvatar = '';
          for (const user of usersAccounts) {
            if (user.username === comment.author) { userAvatar = user.avatar_url; }
          }
          return <CommentCard comment={comment} userAvatar={userAvatar} />;
        }) : <Spinner />}
      </main>
    </div>

    <Footer />
  </>
  );
};
export default CommentsPage;

