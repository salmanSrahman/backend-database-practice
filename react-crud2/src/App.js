import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddUser from "./Components/AddUser/AddUser";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import UpdateUser from "./Components/UpdateUser/UpdateUser";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="user/add" element={<AddUser />}></Route>
        <Route path="/update/:id" element={<UpdateUser />}></Route>
      </Routes>
    </div>
  );
}

export default App;
