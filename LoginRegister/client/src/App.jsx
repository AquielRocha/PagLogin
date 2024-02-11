import React from 'react';
import './App.scss'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Usuarios from './Components/Dashboard/Crud/Usuarios'
import CreateUsuario from './Components/Dashboard/Crud/CreateUsuario'
import UpdateUsuario from './Components/Dashboard/Crud/UpdateUsuario'



function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/usuarios" element={<Usuarios />}></Route>
       <Route path="/create" element={<CreateUsuario />}></Route>
       <Route path="/update/:id" element={<UpdateUsuario />}></Route>


      </Routes>
    </Router>
  );
}

export default App;
