import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import ExpansionPage from './pages/expansion';
import UpdatesPage from './pages/expansion/updates';
import FAQPage from './pages/expansion/faq';
import VolunteerPage from './pages/expansion/volunteer';
import DonatePage from './pages/expansion/donate';
import SubmitQuestionPage from './pages/expansion/submit-question';
import CalendarPage from './pages/calendar';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/expansion' element={<ExpansionPage />} />
        <Route path='/expansion/updates' element={<UpdatesPage />} />
        <Route path='/expansion/faq' element={<FAQPage />} />
        <Route path='/expansion/volunteer' element={<VolunteerPage />} />
        <Route path='/expansion/donate' element={<DonatePage />} />
        <Route path='/expansion/submit-question' element={<SubmitQuestionPage />} />
        <Route path='/calendar' element={<CalendarPage />} />
      </Routes>
    </Router>
  );
}

export default App;
