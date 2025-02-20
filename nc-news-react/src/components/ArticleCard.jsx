import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { patchVotes } from "../utils/utils";
import ATagVotes from "./ATagVotes";
import ATagSeeComments from "./ATagSeeComments";
import ErrorMessage from "./ErrorMessage";

const ArticleCard = ({ article }) => {
  const [votes, setVotes] = useState(article.votes);
  const [isError, setIsError] = useState(false);
  const [userVoted, setUserVoted] = useState(false);

  useEffect(() => {
    setVotes(article.votes);
  }, [article.votes]);

  const nav = useNavigate();
  const handleSeeComments = (e) => {
    e.preventDefault();
    nav(`/${article.article_id}/comments`);
  };

  const handleVote = (e) => {
    e.preventDefault();
    const voteCount = userVoted ? -1 : +1;
    setUserVoted(curr => !curr);
    setVotes((currVotes) => currVotes + voteCount);

    patchVotes(`/articles/${article.article_id}`, { inc_votes: voteCount })
      .catch(err => {
        setIsError(true);
        setVotes(currVotes => currVotes - 1);
      });
    setUserVoted(curr => !curr);
  };

  if (isError) { return <ErrorMessage message={'Your vote was not registered.'} />; }
  return (
    <div key={`${article.article_id}${article.created_at}`} className="w-10/12 m-auto bg-white border border-gray-200 rounded-lg shadow-sm">
      <a href="#">
        <img className="rounded-t-lg m-auto" src={article.article_img_url} alt={article.title} />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-4 text-xl font-bold tracking-tight text-gray-900">{article.title}</h5>
        </a>
        {article.body ? <p className="my-6 px-4">{article.body}</p> : null}
        <div className="container w-10/12 flex justify-between items-center m-auto">
          <a href="#" className='inline-flex items-center text-red-600 text-xs'>{article.topic.toUpperCase() || 'General'}
          </a>

          <ATagSeeComments onClickFunc={handleSeeComments} text={`${article.comment_count}`} />
          <ATagVotes onClickFunc={handleVote} votes={votes || article.votes} fill={userVoted} />
        </div>
      </div>
    </div>
  );
};
export default ArticleCard;