import React, { useEffect, useState } from "react";

const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h1>Active user : {users.length}</h1>
      <ul>
        {users.map((user) => (
          <li>
            {user.name} :: {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
