import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button } from '@mui/material';
import { DataContext } from '../../context/DataContext';

const DroneOverview = () => {
  const { data } = useContext(DataContext);

  return (
    <div className="p-4">
      <Typography variant="h6" gutterBottom className="text-xl font-bold mb-4">
        Drone Fleet Overview
      </Typography>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b border-gray-200">ID</th>
              <th className="px-4 py-2 border-b border-gray-200">Status</th>
              <th className="px-4 py-2 border-b border-gray-200">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.map(drone => (
              <tr key={drone.id} className="hover:bg-gray-100">
                <td className="px-4 py-2 border-b border-gray-200">
                  <Link to={`/drone/${drone.id}`} className="text-blue-500 hover:underline">
                    {drone.id}
                  </Link>
                </td>
                <td className="px-4 py-2 border-b border-gray-200">{drone.status}</td>
                <td className="px-4 py-2 border-b border-gray-200">
                  <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to={`/drone/${drone.id}`}
                    className="bg-blue-500 hover:bg-blue-700 whitespace-nowrap text-white"
                  >
                    See Details
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DroneOverview;
