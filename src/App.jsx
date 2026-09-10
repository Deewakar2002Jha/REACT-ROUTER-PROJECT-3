import React from 'react'
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Navbar from './COMPONENTS/Navbar';
import Home from './PAGES/Home';
import About from './PAGES/About';
import Dashboard from './PAGES/Dashboard';
import Profile from './PAGES/Profile';
import Settings from './PAGES/Setting';
const App = () => {
  return (
    <BrowserRouter>

      {/* Navbar appears on every page */}
      <Navbar />

      <main className="min-h-screen bg-gray-50">

        <Routes>

          {/* Normal Routes */}
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          {/* Parent Route */}
          <Route
            path="/dashboard"
            element={<Dashboard />}
          >

            {/* Nested Routes */}
            <Route
              path="profile"
              element={<Profile />}
            />

            <Route
              path="settings"
              element={<Settings />}
            />

          </Route>

        </Routes>

      </main>

    </BrowserRouter>
  )
}

export default App