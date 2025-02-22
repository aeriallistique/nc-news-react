const HangMessage = () => {
  return (
    <div className=" w-6/12 mx-auto mt-3 p-4 rounded-lg text-center bg-red-200">
      <p>The Server will spin down after 15 minutes of inactivity. Hang tight. It can take up to 50 seconds for it to get back online. If nothing happens after 50 seconds, please reload the page.</p>
    </div>
  );
};
export default HangMessage;