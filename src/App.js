import "./App.css";
import NavBar from "./Component/NavBar";
import Catalog from "./Component/Catalog";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Admin from "./Component/Admin";
import Home from "./Component/Home";
import Cart from "./Component/Cart";
import AdminProducts from "./Component/AdminProducts";
import AdminCoupons from "./Component/AdminCoupons";
import GlobalStoreProvider from "./context/globalStoreProvider";
import CatalogMen from './Component/CatalogMen';
import CatalogWomen from "./Component/CatalogWomen";
import CatalogKids from "./Component/CatalogKids";

function App() {
  return (
    <div className="App">
      <GlobalStoreProvider>
        <BrowserRouter>
          <NavBar></NavBar>

          <Routes>
            <Route path="/Home" exact element={<Home />}></Route>
            <Route path="/Catalog" exact element={<Catalog />}></Route>
            <Route path="/Admin" exact element={<Admin />}></Route>
            <Route path="/Cart" exact element={<Cart />}></Route>
            <Route path="/CatalogMen" exact element={<CatalogMen />}></Route>
            <Route path="/CatalogWomen" exact element={<CatalogWomen />}></Route>
            <Route path="/CatalogKids" exact element={<CatalogKids />}></Route>
            <Route
              path="/AdminProducts"
              exact
              element={<AdminProducts />}
            ></Route>
            <Route
              path="/AdminCoupons"
              exact
              element={<AdminCoupons />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </GlobalStoreProvider>
    </div>
  );
}

export default App;
