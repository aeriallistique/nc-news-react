import { useEffect, useState, useContext } from "react";
import Navbar from "../components/Navbar";
import axios from 'axios';
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
  const { usersAccounts, setUsersAccounts } = useContext(UsersAccounts);

  useEffect(() => {
    axios.get(`https://andis-news-app.onrender.com/api/articles${articleIDwComment}`)
      .then(resp => {
        setComments(resp.data.comments);
      });
    axios.get(`https://andis-news-app.onrender.com/api/users`).then(resp => {
      setUsersAccounts(resp.data);
    });
  }, []);


  return (<>
    <div className="main-container w-11/12 h-auto m-auto">
      <Navbar />
      <PostComment articleID={articleID} />

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

