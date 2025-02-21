import { useNavigate } from "react-router";
import { UserAccount } from "../context/UsersContext";
import { useContext } from "react";

const Navbar = () => {
  const nav = useNavigate();
  const { loggedInUser, setLoggedInUser } = useContext(UserAccount);

  const handleLogoClick = (e) => {
    e.preventDefault();
    nav('/');
  };
  return (
    <nav className="navbar w-11/12 mx-auto h-16 bg-red-500 text-white flex flex-row justify-between items-center p-4 mb-2 border border-t-0 rounded-b-lg">
      <a href="#" className="border border-gray-300 bg-red-200 rounded-full h-8 w-8 overflow-hidden">
        <img className="h-full w-full object-contain" src={`${loggedInUser.avatar_url}`} alt={`${loggedInUser.username}`} />

      </a>
      <a href="#" className="" onClick={(e) => { handleLogoClick(e); }}>
        <span className="bg-white rounded-xs text-black p-1">N</span>
        <span className="bg-white rounded-xs text-black p-1 mx-2">N</span>
        <span className="bg-white rounded-xs text-black p-1">C</span>

      </a>
      <a href="">Logout</a>
    </nav>
  );
};

export default Navbar;