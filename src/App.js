import "./App.css";
import NavBar from "./Component/NavBar";
import Catalog from "./Component/Catalog";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Admin from "./Component/Admin";
import Home from "./Component/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>

        <Routes>
          <Route path="/Home" exact element={<Home />}></Route>
          <Route path="/Catalog" exact element={<Catalog />}></Route>
          <Route path="/Admin" exact element={<Admin />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
