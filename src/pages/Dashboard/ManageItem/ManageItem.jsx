import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenuFetch from "../../../hooks/useMenuFetch";

const ManageItem = () => {
  const [menuData] = useMenuFetch();
  return (
    <div className="w-full mx-8">
      {" "}
      <SectionTitle subHeading="Explore" heading="Manage Items"></SectionTitle>
      <h2 className="text-2xl font-bold underline my-2 uppercase">
        Items: {menuData.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {menuData.map((data, index) => (
              <tr key={data._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={data.image} alt={data.name} />
                    </div>
                  </div>
                </td>
                <td>{data.name}</td>
                <td>{data.category}</td>
                <td className="text-end">{data.price}</td>
                <td>
                  <button className="btn btn-ghost btn-xs bg-orange-600 text-white">
                    update
                  </button>
                </td>
                <td>
                  <button className="btn btn-ghost btn-xs bg-red-600 text-white">
                    delete
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

export default ManageItem;
