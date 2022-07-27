import "./App.css";
import NavBar from "./Component/NavBar";
import Catalog from "./Component/Catalog";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/Catalog" element={<Catalog />}></Route>
      </Routes>
    </>
  );
}

export default App;
