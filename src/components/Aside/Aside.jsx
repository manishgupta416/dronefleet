import React from "react";
import { Link } from 'react-router-dom';
const Aside = ({ setSidebarOpen, isSidebarOpen }) => {
  return (
    <div>
      {" "}
      <aside
        className={`fixed inset-0 z-30 transform bg-white shadow-md transition-transform duration-300 ease-in-out md:relative md:w-64 md:block md:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:h-full`}
      >
        <div className="p-4 text-xl font-bold text-center border-b">
          Navigation
        </div>
        <nav className="p-4">
          <ul>
            <li className="mb-2">
              <Link
                to="/"
                className="block p-2 text-gray-700 hover:bg-gray-200 rounded"
                onClick={() => setSidebarOpen(false)}
              >
                Overview
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="/maintenance"
                className="block p-2 text-gray-700 hover:bg-gray-200 rounded"
                onClick={() => setSidebarOpen(false)}
              >
                Maintenance
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default Aside;
