import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/user/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  const handleUpdateUser = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const updateUser = { name, email };

    //send data to the server
    const url = `http://localhost:5000/user/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("User updated successfully!!!");
        event.target.reset();
      });
  };

  return (
    <div>
      <h1>Update User</h1>
      <h4>User Name : {user.name}</h4>
      <form onSubmit={handleUpdateUser}>
        <input type="text" name="name" placeholder="Name" />
        <br />
        <br />
        <input type="email" name="email" placeholder="Email" />
        <br />
        <br />
        <input type="submit" name="submit" value="Add User" />
      </form>
    </div>
  );
};

export default UpdateUser;
