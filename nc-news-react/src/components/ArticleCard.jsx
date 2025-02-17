const ArticleCard = ({ article }) => {
  return (
    <div key={`${article.article_id}${article.created_at}`} className="w-10/12 m-auto bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg m-auto" src={article.article_img_url} alt={article.title} />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-4 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{article.title}</h5>
        </a>
        <div className="container w-10/12 flex justify-between items-center m-auto">
          <a href="#" className='inline-flex items-center text-red-600 text-xs'>{article.topic.toUpperCase()}</a>
          <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-red-900 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            {article.comment_count} comments
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
          <a href="#">
            <svg className='w-10 h-10' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21s-6.5-4.33-10-9.5C-1.5 6.67 2 2 6.5 2 9 2 12 5 12 5s3-3 5.5-3C22 2 25.5 6.67 22 11.5c-3.5 5.17-10 9.5-10 9.5z" fill="red" />
              <text x="50%" y="55%" fontSize="6" fontFamily="Arial" fontWeight="bold" fill="white" textAnchor="middle" alignmentBaseline="middle">23</text>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
export default ArticleCard;