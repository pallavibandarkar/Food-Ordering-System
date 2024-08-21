import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import {Routes,Route} from "react-router-dom"
import Add from "./pages/ADD/add";
import List from "./pages/LIST/List";
import Orders from "./pages/ORDERS/Orders";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export default function App(){
  return(
    <div>
      <ToastContainer/>
      <Navbar/>
      <div className="app-content">
        <Sidebar/>
        <Routes>
          <Route path="/add" element={<Add/>}/>
          <Route path="list" element={<List/>}/>
          <Route path="/orders" element={<Orders/>}/>
        </Routes>
      </div>
    </div>
  )
}