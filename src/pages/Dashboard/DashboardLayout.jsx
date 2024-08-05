import React, { useState } from "react";
import DroneStatusChart from "./DroneStatusChart";
import FlightHoursChart from "./FlightHoursChart";
import DroneOverview from "./DroneOverview";
import Header from "../../components/Header/Header";
import Aside from "../../components/Aside/Aside";

const DashboardLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Header toggleSidebar={toggleSidebar} />

      <div className="flex flex-1">
        <Aside isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          <h1 className="text-3xl font-bold mb-4 text-center">
            Drone Fleet Management Dashboard
          </h1>

          <div className="bg-white shadow-md rounded-lg p-4 my-4">
            <DroneOverview />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white shadow-md rounded-lg p-4">
              <DroneStatusChart />
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <FlightHoursChart />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
