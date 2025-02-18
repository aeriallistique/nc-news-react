import { useState, useEffect } from 'react';
import axios from 'axios';
import ArticleCard from './ArticleCard';
import Spinner from './Spinner';
import ErrorMessage from './ErrorMessage';
import { getArticles } from '../utils/utils';

const ArticlesList = () => {
  const [articles, setArticles] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getArticles('/articles?limit=10&p=1')
      .then(resp => setArticles(resp))
      .catch((err) => setIsError(err.message));
  }, []);


  return (
    <main className='main-content w-11/12 sm:w-12/12 h-full m-auto mb-4 text-center grid grid-cols-1 lg:grid-cols-2 gap-4'>
      {isError ? <ErrorMessage message={isError} /> : (
        articles ? articles.map(article => {
          return <ArticleCard article={article} />;
        }) : <Spinner />)}
    </main>
  );
};

export default ArticlesList;