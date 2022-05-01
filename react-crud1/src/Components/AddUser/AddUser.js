import React from "react";

const AddUser = () => {
  const handleAddToUser = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const user = { name, email };

    fetch("http://localhost:5000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <h1>Add Your User.</h1>
      <form onSubmit={handleAddToUser}>
        <input type="text" name="name" placeholder="Name" required />
        <br />
        <br />
        <input type="email" name="email" placeholder="Email" required />
        <br />
        <br />
        <input type="submit" value="Add User" />
      </form>
    </div>
  );
};

export default AddUser;
