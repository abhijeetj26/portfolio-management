// @ts-nocheck
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";

import './App.css';
import Dashboard from './pages/Dashboard';
import OrderPage from './pages/OrderPage';


function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="orders" element={<OrderPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
