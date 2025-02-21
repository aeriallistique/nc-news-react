import Navbar from "../components/Navbar";
import ArticleCard from "../components/ArticleCard";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticles } from "../utils/utils";
import Spinner from "../components/Spinner";
import Footer from "../components/Footer";
import ErrorMessage from "../components/ErrorMessage";

const SingleArticlePage = () => {
  const location = useLocation();
  const nav = useNavigate();
  const path = location.pathname;
  let article_id;
  path.includes('/topic') ? article_id = path.split('/')[path.split('/').length - 1] : article_id = location.pathname;

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


  return (<>
    <div className="main-container w-11/12 h-auto mb-6 mx-auto min-h-screen flex flex-col pt-4">
      <button
        className="cursor-pointer hover:font-semibold mr-auto mb-2"
        onClick={() => nav(-1)}>
        &larr;back
      </button>
      {isError ? <ErrorMessage message={errorMsg} /> :
        (article ? <ArticleCard article={article} /> : <Spinner />)
      }

    </div>
    <Footer />
  </>
  );
};
export default SingleArticlePage;