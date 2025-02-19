import Navbar from "../components/Navbar";
import ArticlesList from "../components/ArticlesList";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { getArticles, getTopics } from "../utils/utils";

const ArticlesPage = () => {
  const [topics, setTopics] = useState(null);
  const [articles, setArticles] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getTopics().then(resp => setTopics(resp));
    getArticles('/articles?limit=10&p=1')
      .then(resp => setArticles(resp))
      .catch(err => setIsError(err.message));
  }, []);

  return (
    <div className="main-container w-11/12 h-auto m-auto">
      <Navbar />
      <ArticlesList topics={topics} articles={articles} isError={isError} />
      <Footer />
    </div>
  );
};

export default ArticlesPage;

