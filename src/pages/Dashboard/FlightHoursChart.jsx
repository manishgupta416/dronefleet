import React, { useContext } from 'react';
import { Bar } from 'react-chartjs-2';
import { DataContext } from '../../context/DataContext';

const FlightHoursChart = () => {
    const {data} =useContext(DataContext)

  const data1 = {
    labels:data?.map(drone => drone.id),
    datasets: [
      {
        label: 'Total Flight Hours',
        data: data?.map(drone => drone.flight_hours),
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Total Flight Hours by Drone</h2>
      <div className="chart-container">
        <Bar data={data1} options={options} />
      </div>
    </div>
  );
};

export default FlightHoursChart;
