const ErrorMessage = ({ message }) => {
  return (
    <section
      role="alert"
      aria-live="assertive"
      className="w-full max-w-md mx-auto bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg shadow-md"
    >
      <h2 className="text-lg font-semibold">Ooops! Something went wrong...</h2>
      <h4 className="text-lg">{message}</h4>
      <p className="text-sm mt-1">
        Please try again...
      </p>
    </section>
  );
};
export default ErrorMessage;