import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Apartments from './pages/Apartments'
import About from './pages/About'
import Error from './pages/Error'
import Header from './components/Header'
import './styles/app.css'

 
function AppRouter() {
    return (
        <Router>
          <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/" element={<Apartments />} />
              <Route path="/" element={<About />} />
              <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;