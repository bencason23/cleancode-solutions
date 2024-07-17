import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Registration from './Pages/Registration';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import ReturnedBooksDashboard from './Components/ReturnedBooksDashboard';
import NewBookForm from './Pages/NewBookForm';
import BorrowedBookForm from './Pages/BorrowedBookForm';
import BorrowedBook from './Pages/BorrowedBook';
import ReturnedBookForm from './Components/ReturnedBookForm'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/NewBookForm" element={<NewBookForm />} />
        <Route path="/BorrowedBookForm" element={<BorrowedBookForm />} />
        <Route path="/BorrowedBook" element={<BorrowedBook />} />
        <Route path="/ReturnedBookForm" element={<ReturnedBookForm />} /> {/* Correct usage */}
        <Route path="/ReturnedBooksDashboard" element={<ReturnedBooksDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
