import React from "react";

const AddUser = () => {
  const handleAddUser = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const user = { name, email };

    console.log(user);
  };
  return (
    <div>
      <h1>Please add user.</h1>
      <form onSubmit={handleAddUser}>
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

export default AddUser;
