import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import ExpansionPage from './pages/expansion';
import UpdatesPage from './pages/expansion/updates';
import CalendarPage from './pages/calendar';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/expansion' element={<ExpansionPage />} />
        <Route path='/expansion/updates' element={<UpdatesPage />} />
        <Route path='/calendar' element={<CalendarPage />} />
      </Routes>
    </Router>
  );
}

export default App;
