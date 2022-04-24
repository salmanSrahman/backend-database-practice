import "./App.css";
function App() {
  const handleForm = (event) => {
    event.preventDefault();
  };

  return (
    <div className="App">
      <h1>User Form:</h1>
      <form onSubmit={handleForm}>
        <input type="text" name="name" id="" />
        <br />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
