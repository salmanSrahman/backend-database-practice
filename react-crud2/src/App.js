import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddUser from "./Components/AddUser/AddUser";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="user/add" element={<AddUser />}></Route>
      </Routes>
    </div>
  );
}

export default App;
