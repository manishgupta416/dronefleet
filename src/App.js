import React, { useContext } from "react";
import { DataContext } from "./context/DataContext";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import DashboardLayout from "./pages/Dashboard/DashboardLayout";
import DroneDetails from "./pages/Dashboard/DroneDetails";
import Maintenance from "./pages/Dashboard/Maintenance";
import "./pages/Dashboard/ChartSetup.js";
import PrivateRoute from "./PrivateRoute/PrivateRoute.jsx";

const App = () => {
  const { isContextWorking, data, userList } = useContext(DataContext);
  console.log(data, userList);
  return (
    <div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/"
          element={<PrivateRoute>{<DashboardLayout />}</PrivateRoute>}
        />
        <Route
          path="/drone/:id"
          element={<PrivateRoute>{<DroneDetails />}</PrivateRoute>}
        />
        <Route
          path="/maintenance"
          element={<PrivateRoute>{<Maintenance />}</PrivateRoute>}
        />
      </Routes>
    </div>
  );
};

export default App;
