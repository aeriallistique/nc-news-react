import ErrorMessage from "../components/ErrorMessage";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const nav = useNavigate();
  return (<div className="w-11/12 mx-auto">
    <button
      className="cursor-pointer hover:font-semibold"
      onClick={() => nav(-1)}>
      &larr;back
    </button>
    <ErrorMessage message={'Page does not exist.'} />
  </div>
  );
};

export default ErrorPage;