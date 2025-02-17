import Navbar from "../components/Navbar";
import ArticleCard from "../components/ArticleCard";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import Footer from "../components/Footer";

const SingleArticlePage = () => {
  const location = useLocation();
  const article_id = location.pathname;
  const [article, setArticle] = useState(null);

  useEffect(() => {
    axios.get(`https://andis-news-app.onrender.com/api/articles${article_id}`)
      .then(resp => {
        console.log(resp.data);
        setArticle(resp.data.article);
      });
  }, []);

  return (
    <div className="main-container w-11/12 h-auto m-auto min-h-screen flex flex-col ">
      <Navbar />
      {article ? <ArticleCard article={article} hasBody={true} /> : <Spinner />}
      <Footer />
    </div>
  );
};
export default SingleArticlePage;