import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import useIsAdmin from "../hooks/useIsAdmin";
import { AuthContext } from "../providers/AuthProvider";

const AdminRoute = () => {
  const { user, loading } = useContext(AuthContext);
  const { isAdmin, isAdminLoading } = useIsAdmin();

  if (loading || isAdminLoading) {
    return <h2>Loading........</h2>;
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/"></Navigate>;
};

export default AdminRoute;
