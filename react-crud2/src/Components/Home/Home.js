import React, { useEffect, useState } from "react";

const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleDeleteUser = (id) => {
    const proceed = window.confirm("Are you sure you want to delete?");
    if (proceed) {
      console.log("delete this user", id);
      const url = `http://localhost:5000/user/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            console.log(data);
            const remaining = users.filter((user) => user._id !== id);
            setUsers(remaining);
          }
        });
    }
  };

  return (
    <div>
      <h1>Active user : {users.length}</h1>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.name} :: {user.email}
            <button onClick={() => handleDeleteUser(user._id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
