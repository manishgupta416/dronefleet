import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { DataContext } from "../context/DataContext";

const PrivateRoute = ({ children }) => {
  const { currentUser } = useContext(DataContext);
  const location = useLocation();
  return currentUser.isLoggedIn ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};
export default PrivateRoute;