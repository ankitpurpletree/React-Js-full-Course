import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NotesProvider } from './context/NotesContext'; // Ensure correct path
import Home from './pages/Home';
import NoteView from './pages/NoteView';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <NotesProvider>
      <Router>
        <div className={darkMode ? 'dark' : ''}>
          <div className="min-h-screen bg-white dark:bg-gray-900 dark:text-white">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 m-4 bg-gray-700 text-white rounded-md"
            >
              Toggle Dark Mode
            </button>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/note/:id" element={<NoteView />} />
            </Routes>
          </div>
        </div>
      </Router>
    </NotesProvider>
  );
}

export default App;
