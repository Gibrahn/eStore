import "./App.css";
import NavBar from "./Component/NavBar";
import Catalog from "./Component/Catalog";
import Admin from "./Component/Admin";
import Cart from "./Component/Cart";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStoreProvider from "./context/globalStoreProvider";

function App() {
  return (
    <>
      <div className="App">
        <GlobalStoreProvider>
          <BrowserRouter>
            <NavBar></NavBar>

            <Routes>
              <Route path="/catalog" element={<Catalog />}></Route>
              <Route path="/admin" element={<Admin />}></Route>
              <Cart path="/cart"></Cart>
            </Routes>
          </BrowserRouter>
        </GlobalStoreProvider>
      </div>
    </>
  );
}

export default App;
