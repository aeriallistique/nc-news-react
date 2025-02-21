

const Spinner = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-2 w-full ml-auto lg:col-span-2">
      <div className="w-10 h-10 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
      <p className="text-gray-600 text-sm font-medium">Loading...please wait</p>
    </div>
  );
};

export default Spinner;
