import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { getArticles, getTopics } from "../utils/utils";
import ArticlesList from "../components/ArticlesList";
import Navbar from "../components/Navbar";

const TopicArticlesPage = () => {
  const { slug } = useParams();
  const [topic, setTopic] = useState(slug);
  const [topics, setTopics] = useState(null);
  const [articles, setArticles] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getTopics().then(resp => setTopics(resp));
    getArticles(`/articles?sort_by=topic&topic=${topic}`)
      .then(resp => setArticles(resp.filter(article => article.topic === topic)))
      .catch(err => setIsError(err.message));
  }, [topic]);



  return (<div className="w-11/12 mx-auto">
    <ArticlesList topics={topics} articles={articles} isError={isError} setTopic={setTopic} />
  </div>
  );
};

export default TopicArticlesPage;