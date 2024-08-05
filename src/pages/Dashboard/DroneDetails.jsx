import React, { useContext ,useState} from 'react';
import { useParams } from 'react-router-dom';
import { DataContext } from '../../context/DataContext';
import Header from '../../components/Header/Header';
import Aside from '../../components/Aside/Aside';
import { useNavigate } from 'react-router-dom';

const DroneDetails = () => {
  const { data } = useContext(DataContext);
  const { id } = useParams();
  const drone = data?.find(d => d.id === id);
  const navigate = useNavigate(); 
  if (!drone) {
    return <div className="text-red-500 text-center text-xl">Drone not found</div>;
  }
  
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='flex flex-col  justify-center m-auto'>
 <Header toggleSidebar={toggleSidebar}/>
 <div className="flex flex-1">
    <Aside isSidebarOpen={isSidebarOpen} />
    <div className="flex  gap-5 justify-center p-4 m-auto">

      <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Drone Details - {drone.id}</h2>
        <div className="mb-4">
          <p className="text-lg font-semibold">Total Flight Hours:</p>
          <p className="text-gray-700">{drone.flight_hours}</p>
        </div>
        <div className="mb-4">
          <p className="text-lg font-semibold">Battery Status:</p>
          <p className="text-gray-700">{drone.battery_status}</p>
        </div>
        <div className="mb-4">
          <p className="text-lg font-semibold">Last Known Location:</p>
          <p className="text-gray-700">
            ({drone.last_known_location[0]}, {drone.last_known_location[1]})
          </p>
        </div>
        <div className="mb-4">
          <p className="text-lg font-semibold">Current Mission:</p>
          <p className="text-gray-700">{drone.current_mission}</p>
        </div>
        <div className="mb-4">
          <p className="text-lg font-semibold">Maintenance Logs:</p>
          <ul className="list-disc list-inside text-gray-700">
            {drone.maintenance_logs.map((log, index) => (
              <li key={index}>
                {log.date}: {log.description} (Technician: {log.technician})
              </li>
            ))}
          </ul>
        </div>
        <button
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
          onClick={() => navigate('/')}
        >
          Back to Overview
        </button>
      </div>
    </div>
    </div>
    </div>
  );
};

export default DroneDetails;
