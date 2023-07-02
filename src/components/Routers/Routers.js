import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../Home/home';
import SignInSide from '../login/SignInSide';
import Student from '../Student';
import Event from '../events';
import Appbar from '../Appbar';

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/signin" />} />
        <Route path="/home" element={<Home />} />
        <Route path='/signin' element={<SignInSide />}/>
        <Route path="/student" element={<Student />} />
        <Route path="/events" element={<Event />}/>
        <Route path="/appbar" element={<Appbar />}/>
      </Routes>
    </Router>
  );
};

export default Routers;


