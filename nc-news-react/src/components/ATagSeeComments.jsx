const ATagSeeComments = ({ onClickFunc, text }) => {
  return (
    <a href="#" onClick={(e) => { onClickFunc(e); }} className="inline-flex items-center sm:px-2 sm:py-2  p-2 my-1 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 focus:ring-1 focus:outline-none focus:ring-red-900">
      {text} comments
      <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
      </svg>
    </a>
  );
};
export default ATagSeeComments;