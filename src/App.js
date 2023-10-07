import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/header";
import Footer from "./component/footer";
import TrangChu1 from "./component/TrangChu1";
import JordanComponent from "./component/JordanComopnent";
import Detail from "./component/Detail";
import GioHang from "./component/GioHang";
import { Link } from "react-router-dom";
import Login from "./component/Login";
import BanHangTaiQuay from "./component/BanHangTaiQuay"
import BanHangOnlineCoTK from "./component/BanHangOnlineCoTK"
import BanHangOnlineKhongTK from "./component/BanHangOnlineKhongTK"
import BanHangTaiQuayButton from "./component/BanHangTaiQuayButton"




import "./App.css";
function App() {
  return (
    <div >
      <BrowserRouter>
        <Header />  
        <Routes>
          <Route path="" exact element={<TrangChu1 />} />
          <Route path="/login" exact element={<Login/>} />
          <Route path="/jordan" exact element={<JordanComponent/>} />
          <Route path="/detail" exact element={<Detail/>} />
          <Route path="/cart" exact element={<GioHang/>}/>
          <Route path="/ban-hang-tai-quay" exact element={<BanHangTaiQuay/>}/>
          <Route path="/ban-hang-online-co-tk" exact element={<BanHangOnlineCoTK/>}/>
          <Route path="/ban-hang-online-khong-tk" exact element={<BanHangOnlineKhongTK/>}/>
          <Route path="/ban-hang-tai-quay1" exact element={<BanHangTaiQuayButton/>}/>




        </Routes>
        <footer/>
      </BrowserRouter>
    </div>
  );
}
export default App;
