import React from 'react';
import { Routes, Route } from "react-router-dom";
import "./assets/styles/tailwind.css";
import Login from './Component/Auth/Login';
import Profile from './Component/Auth/Profile';
import Component from './Component/Dashboard/Component';
import Dashboard from './Component/Dashboard/Dashboard';
// alimojsjnsd

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/admin/profile" element={<Profile />} />
        <Route path="/admin/component" element={<Component />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route exact path="/admin" element={<Dashboard />}></Route>
        <Route exact path="/" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
