import { useEffect, useState, useContext } from "react";
import Navbar from "../components/Navbar";
import axios from 'axios';
import { useLocation } from "react-router-dom";
import Spinner from "../components/Spinner";
import CommentCard from "../components/CommentCard";
import { UsersAccounts } from "../context/UsersContext";
import Footer from "../components/Footer";


const CommentsPage = () => {
  const location = useLocation();
  const article_id = location.pathname;
  const [comments, setComments] = useState(null);
  const { usersAccounts, setUsersAccounts } = useContext(UsersAccounts);

  useEffect(() => {
    axios.get(`https://andis-news-app.onrender.com/api/articles${article_id}`)
      .then(resp => {
        console.log(resp.data.comments);
        setComments(resp.data.comments);
      });
    axios.get(`https://andis-news-app.onrender.com/api/users`).then(resp => {
      console.log(resp.data);
      setUsersAccounts(resp.data);
    });
  }, []);
  return (<>
    <div className="main-container w-11/12 h-auto m-auto">
      <Navbar />
      <h2 className="pr-4 mt-4 mr-auto">Comments:</h2>
      <main className="flex flex-col justify-center items-center lg:grid lg:grid-cols-2 lg:place-items-center">

        {comments ? comments.map(comment => {
          let userAvatar = '';
          for (const obj of usersAccounts) {
            if (obj.username === comment.author) { userAvatar = obj.avatar_url; }
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

