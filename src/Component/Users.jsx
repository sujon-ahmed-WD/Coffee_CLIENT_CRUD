import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const lodeduser = useLoaderData();
  const [users, setUsers] = useState(lodeduser);

  const handleDelete = (id) => {

    fetch(`http://localhost:5000/user/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // Remove the deleted user from the state
        const remainingUsers = users.filter((user) => user._id !== id);
        setUsers(remainingUsers);
      });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Created At</th>
              <th>Last Logged In</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {lodeduser.map((use) => (
              <tr key={use._id}>
                <th>1</th>
                <td>{use.user.email}</td>
                <td>{use.user.createdAt}</td>
                <td></td>
                <td onClick={() => handleDelete(use._id)} className="btn">
                  X
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
