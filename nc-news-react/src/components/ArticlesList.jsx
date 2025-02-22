import { useNavigate } from 'react-router';
import ArticleCard from './ArticleCard';
import ErrorMessage from './ErrorMessage';

const ArticlesList = ({ topics, articles, isError, setTopic }) => {
  const nav = useNavigate();

  const handleTopicSelection = (e) => {
    if (setTopic) { setTopic(e.target.value); }
    nav(`/topic/${e.target.value}`);
  };


  return (<>
    <select
      onChange={(e) => { handleTopicSelection(e); }}
      className='border border-red-300 bg-red-300 rounded-lg block mx-auto m-4 p-2 cursor-pointer hover:bg-red-500 hover:text-white'>
      <option
        value="">
        Please choose a Topic
      </option>
      {topics?.map(topic => <option
        key={topic.slug}
        value={topic.slug}>
        {topic.slug}
      </option>
      )}
    </select>
    <main className='main-content w-11/12 sm:w-12/12 h-full m-auto mb-4 text-center grid grid-cols-1 lg:grid-cols-2 gap-4'>

      {isError ? <ErrorMessage message={isError} /> : (
        articles.map(article => {
          return <ArticleCard key={article.article_id} article={article} />;
        }))}
    </main>
  </>
  );
};

export default ArticlesList;