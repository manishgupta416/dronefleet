import React, { useContext,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../../context/DataContext';
import Header from '../../components/Header/Header';
import Aside from '../../components/Aside/Aside';
import './Dashboard.css'

const Maintenance = () => {
     const [isSidebarOpen, setSidebarOpen] = useState(false);
  const { data } = useContext(DataContext);
  const navigate = useNavigate(); 
 

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const maintenanceLogs = data?.flatMap(drone => drone.maintenance_logs);

  return (
    <div className='flex flex-col  justify-center m-auto'>
    <Header toggleSidebar={toggleSidebar}/>
    <div className="flex flex-1">
    <Aside isSidebarOpen={isSidebarOpen} />
    <div className="min-h-screen maintence-container bg-gray-100 p-6 flex justify-center items-center">
      <div className="w-full  bg-white rounded-lg shadow-lg overflow-hidden">
        <header className="bg-indigo-600 text-white text-center py-4">
          <h2 className="text-3xl font-bold">Maintenance Management</h2>
        </header>

        <div className="p-6 overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead>
              <tr className="text-left border-b border-gray-300">
                <th className="py-3 px-4 text-sm font-semibold text-gray-700">Date</th>
                <th className="py-3 px-4 text-sm font-semibold text-gray-700">Description</th>
                <th className="py-3 px-4 text-sm font-semibold text-gray-700">Technician</th>
              </tr>
            </thead>
            <tbody>
              {maintenanceLogs.map((log, index) => (
                <tr
                  key={index}
                  className={`border-b border-gray-200 ${
                    index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                  }`}
                >
                  <td className="py-3 px-4 text-sm text-gray-900 whitespace-nowrap">{log.date}</td>
                  <td className="py-3 px-4 text-sm text-gray-900 whitespace-nowrap">{log.description}</td>
                  <td className="py-3 px-4 text-sm text-gray-900 whitespace-nowrap">{log.technician}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
            onClick={() => navigate('/')}
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Maintenance;
