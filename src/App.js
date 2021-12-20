import React from "react"
import LandingPage from "./Landing/LandingPage";
import AddProduct from "./DashboardRoute/AddProduct"
import AdminDashBoard from "./MainDashBoard/AdminDashBoard"
import UserDashBoard from "./MainDashBoard/UserDashBoard"
import Laptops from "./DashboardRoute/Laptops"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Desktop from "./DashboardRoute/Desktop";
import Printers from "./DashboardRoute/Printers";
import Phones from "./DashboardRoute/Phones";
import Cables from "./DashboardRoute/Cables";
import EditProduct from "./DashboardRoute/EditProduct";
import DetailedPage from "./DashboardRoute/DetailedPage";
import UserLaptops from "./UserDashBoardRoute/UserLaptops";
import UserDesktop from "./UserDashBoardRoute/UserDesktop";
import UserPrinters from "./UserDashBoardRoute/UserPrinters";
import UserPhones from "./UserDashBoardRoute/UserPhones";
import UserCables from "./UserDashBoardRoute/UserCables";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
        </Routes>
        <Routes>
        <Route path="/AdminDashBoard" element={<AdminDashBoard/>} />
        <Route path="/UserDashBoard" element={<UserDashBoard/>} />
          <Route path="/AddProducts" element={<AddProduct/>}/>
          <Route path="/Laptops" element={<Laptops/>}/>
          <Route path="/Desktops" element={<Desktop/>}/>
          <Route path="/Printers" element={<Printers/>}/>
          <Route path="/Phones" element={<Phones/>}/>
          <Route path="/Cables" element={<Cables/>}/>
          <Route path="/EditProduct/:id" element={<EditProduct/>}/>
          <Route path="/DetailedPage" element={<DetailedPage/>}/>
        </Routes>
        <Routes>
        <Route path="/AdminDashBoard" element={<AdminDashBoard/>} />
          <Route path="/UserLaptops" element={<UserLaptops/>}/>
          <Route path="/UserDesktop" element={<UserDesktop/>}/>
          <Route path="/UserPrinters" element={<UserPrinters/>}/>
          <Route path="/UserPhones" element={<UserPhones/>}/>
          <Route path="/UserCables" element={<UserCables/>}/>
          {/* <Route path="/DetailedPage" element={<DetailedPage/>}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
