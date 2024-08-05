import React from "react";
import { Link } from 'react-router-dom';
import { FiMenu } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";

const Header = ({toggleSidebar}) => {
  return (
    <div>
      <header className="bg-indigo-600 text-white shadow-md flex items-center justify-between p-4 w-full">
        <div className="flex items-center">
          <button
            className="md:hidden text-white text-2xl"
            onClick={toggleSidebar}
          >
            <i className="fas fa-bars">
              <FiMenu />
            </i>
          </button>
          <Link to="/" className="ml-4 text-xl font-bold hover:text-gray-200">
            Drone Dashboard
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-lg">Manish</span>
          <img
            src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=626&ext=jpg" 
            alt="User"
            className="w-10 h-10 rounded-full border-2 border-white"
          />
          <span className="mx-3"><FiLogOut />
</span>
        </div>
      </header>
    </div>
  );
};

export default Header;
