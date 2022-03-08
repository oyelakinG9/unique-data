import React from 'react';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import Header from './components/Header';
import Update from './components/Update';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="update" element={<Update />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
