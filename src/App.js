import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// Dashboard
import Layout from "./Layout/layout";
import Login from './Layout/login';
import Calender from "./components/calender"

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Layout />} />
        <Route path='/calender' element={< Calender />} />
      </Routes>
    </Router>
  );
}

export default App;
