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

      <a href="#" className="" onClick={(e) => { handleLogoClick(e); }}>

        <svg width="100" height="60" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="60" height="60" fill="black" />
          <rect x="70" y="0" width="60" height="60" fill="black" />
          <rect x="140" y="0" width="60" height="60" fill="black" />

          <text x="15" y="42" fontFamily="Arial, sans-serif" fontSize="36" fontWeight="bold" fill="white">N</text>
          <text x="85" y="42" fontFamily="Arial, sans-serif" fontSize="36" fontWeight="bold" fill="white">N</text>
          <text x="155" y="42" fontFamily="Arial, sans-serif" fontSize="36" fontWeight="bold" fill="white">C</text>
        </svg>

      </a>
      <div className=" h-16 w-4/12 flex  justify-center items-center ">
        <a href="#" className="border border-gray-300 bg-red-200 rounded-full h-8 w-8 mr-3 overflow-hidden">
          <img className="h-full w-full object-cover " src={`${loggedInUser.avatar_url}`} alt={`${loggedInUser.username}`} />
        </a>
        <p className="text-amber-950"> <span className="text-white">hi</span> {loggedInUser.username}</p>
      </div>
      <a href="#">Logout</a>
    </nav>
  );
};

export default Navbar;

