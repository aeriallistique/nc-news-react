const Navbar = () => {
  return (
    <nav className="navbar w-full h-16 bg-red-500 text-white flex flex-row justify-between items-center p-4 mb-2 border border-t-0 rounded-b-lg">
      <a href="#" className="border border-transparent rounded-full h-8 w-8 overflow-hidden">
        <img className="h-full w-full object-cover" src="https://images.pexels.com/photos/2403392/pexels-photo-2403392.jpeg?w=700&h=700" alt="" />

      </a>
      <div className="">
        <span className="bg-white rounded-xs text-black p-1">N</span>
        <span className="bg-white rounded-xs text-black p-1 mx-2">N</span>
        <span className="bg-white rounded-xs text-black p-1">C</span>

      </div>
      <a href="">Logout</a>
    </nav>
  );
};

export default Navbar;