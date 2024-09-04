import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CalendarView from './components/CalendarView';
import EventDetails from './components/EventDetails';
import AddEvent from './components/AddEvent';
import EditEvent from './components/EditEvent';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<CalendarView />} />
        <Route path="/event/:id" element={<EventDetails />} />
        <Route path="/add" element={<AddEvent />} />
        <Route path="/edit/:id" element={<EditEvent />} />
      </Routes>
    </Router>
  );
}

export default App;
