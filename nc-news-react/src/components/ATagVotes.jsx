const ATagVotes = ({ onClickFunc, votes, fill }) => {
  return (
    <a href="#" className="group" onClick={(e) => { onClickFunc(e); }}>
      <svg className='w-10 h-10 transition-all duration-200 transform group-hover:scale-110' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 21s-6.5-4.33-10-9.5C-1.5 6.67 2 2 6.5 2 9 2 12 5 12 5s3-3 5.5-3C22 2 25.5 6.67 22 11.5c-3.5 5.17-10 9.5-10 9.5z" fill={fill ? 'red' : "#f75452"} />
        <text x="50%" y="55%" fontSize="8" fontFamily="Arial" fontWeight="normal" fill="white" textAnchor="middle" alignmentBaseline="middle">{votes}</text>
      </svg>
    </a>
  );
};
export default ATagVotes;