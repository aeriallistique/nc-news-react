import Navbar from "../components/Navbar";
import ArticleCard from "../components/ArticleCard";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticles } from "../utils/utils";
import Spinner from "../components/Spinner";
import Footer from "../components/Footer";
import ErrorMessage from "../components/ErrorMessage";

const SingleArticlePage = () => {
  const location = useLocation();
  const article_id = location.pathname;
  const [article, setArticle] = useState(null);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    getArticles(`/articles/${article_id}`)
      .then(resp => setArticle(resp.article))
      .catch(err => {
        setIsError(true);
        setErrorMsg(err.message);
      });
  }, []);


  return (
    <div className="main-container w-11/12 h-auto m-auto min-h-screen flex flex-col ">
      <Navbar />
      {isError ? <ErrorMessage message={errorMsg} /> :
        (article ? <ArticleCard article={article} /> : <Spinner />)
      }

      <Footer />
    </div>
  );
};
export default SingleArticlePage;