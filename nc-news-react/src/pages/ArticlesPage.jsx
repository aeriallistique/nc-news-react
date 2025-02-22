import ArticlesList from "../components/ArticlesList";
import Footer from "../components/Footer";
import Spinner from "../components/Spinner";
import HangMessage from '../components/HangMessage';
import { useEffect, useState } from "react";
import { getArticles, getTopics } from "../utils/utils";

const ArticlesPage = () => {
  const [topics, setTopics] = useState(null);
  const [articles, setArticles] = useState(null);
  const [isError, setIsError] = useState(false);
  const [hasSorted, setHasSorted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    let timeout;
    setIsLoading(true);
    timeout = setTimeout(() => {
      setShowMessage(true);
    }, 3000);

    getTopics().then(resp => setTopics(resp));
    getArticles('/articles?limit=10&p=1')
      .then((resp) => {
        setArticles(resp);
        setIsLoading(false);
        setShowMessage(false);
        clearTimeout(timeout);
      })
      .catch(err => setIsError(err.message));

    return () => clearTimeout(timeout);
  }, []);

  const handleSortBy = (e) => {
    if (e.target.value === 'comment_count&order=DESC' || e.target.value === 'comment_count&order=ASC') {
      sortArticlesByComments(e.target.value);
      setHasSorted(curr => !curr);
    } else {
      getArticles(`/articles?sort_by=${e.target.value}`)
        .then(resp => setArticles(resp))
        .catch(err => console.log(err)
        );
      setHasSorted(curr => !curr);
    }
  };

  const sortArticlesByComments = (value) => {
    if (value.endsWith('DESC')) {
      setArticles(curr => curr.sort((a, b) => b.comment_count - a.comment_count));
    } else {
      setArticles(curr => curr.sort((a, b) => a.comment_count - b.comment_count));
    }
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-80">
        <Spinner />
        {showMessage && <HangMessage />}
      </div>
    );
  }


  return (
    <div className="main-container w-11/12 h-auto m-auto">
      <h1 className="text-center text-3xl">Welcome to NNC</h1>
      <select
        className="block ml-auto p-1 rounded border-0 cursor-pointer hover:bg-red-200"
        name="topic"
        id="topic"
        onClick={(e) => { handleSortBy(e); }}>
        <option value="sort_by" default >Sort by:</option>
        <option value="created_at&order=DESC">Newest:</option>
        <option value="created_at&order=ASC">Oldest:</option>
        <option value="comment_count&order=DESC">Most Comments:</option>
        <option value="comment_count&order=ASC">Least Comments:</option>
        <option value="votes&order=DESC">Most Votes:</option>
        <option value="votes&order=ASC">Least Votes:</option>
      </select>
      <ArticlesList topics={topics} articles={articles} isError={isError} />
      <Footer />
    </div>
  );
};

export default ArticlesPage;

