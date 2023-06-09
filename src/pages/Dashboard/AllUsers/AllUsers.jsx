import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const data = await axiosSecure.get("/users");
    return data.data;
  });
  const handleMakeAdmin = async (user) => {
    const data = await axios.patch(
      `http://localhost:5000/users/admin/${user._id}`
    );
    if (data.data.modifiedCount > 0) {
      console.log("user role changes as a admin ");
      refetch();
    }
  };

  const handleDeleteBtn = (user) => {};
  return (
    <div className="w-full px-8">
      <Helmet>
        <title>Bistro Boss | All users</title>
      </Helmet>
      <h3 className="text-3xl font-semibold my-4">
        Total Users: {users?.length}
      </h3>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-ghost bg-gray-600  text-white"
                    >
                      <FaUserShield></FaUserShield>
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteBtn(user)}
                    className="btn btn-ghost bg-red-600  text-white"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
