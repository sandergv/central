import logo from './logo.svg';
import './App.css';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { createContext } from 'react';
import AuthProvider from './components/AuthProvider'



const App = () => {

  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<h1>hi</h1>} />
        <Route
        path="*"
        element={<Navigate to="/dashboard" replace />}
        />

      </Routes>
    </AuthProvider>
  );
}

export default App;
