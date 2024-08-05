import React, { useContext } from 'react';
import { Pie } from 'react-chartjs-2';
import { DataContext } from '../../context/DataContext';

const DroneStatusChart = () => {
    const {data} =useContext(DataContext)
  const statusCounts = data?.reduce((acc, drone) => {
    acc[drone.status] = (acc[drone.status] || 0) + 1;
    return acc;
  }, {});

  const data1 = {
    labels: Object.keys(statusCounts),
    datasets: [
      {
        label: 'Drone Statuses',
        data: Object.values(statusCounts),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Drone Status Distribution</h2>
      <div className="chart-container">
        <Pie data={data1} />
      </div>
    </div>
  );
};

export default DroneStatusChart;
