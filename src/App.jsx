import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Internships from "./pages/Internship";
import Graduate from "./pages/Graduate";
import Ambassador from "./pages/Ambassador";
import StartupJourney from "./pages/StartupJourney";
import JobPortal from "./pages/JobPortal";
import Dashboard from "./pages/Dashboard";
import BlogsDashboard from "./pages/BlogsDashboard";
import CertificationsDashboard from "./pages/CertificationsDashboard";
import BootcampsDashboard from "./pages/BootcampsDashboard";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-zinc-950 text-zinc-50 antialiased selection:bg-emerald-500/30">
        {/* Global Navbar */}
        <Navbar />

        {/* Dynamic Page Routes */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/internships" element={<Internships />} />
            <Route path="/graduate-program" element={<Graduate />} />
            <Route path="/ambassador" element={<Ambassador />} />
            <Route path="/startup-journey" element={<StartupJourney />} />
            <Route path="/blogs" element={<BlogsDashboard />} />
            <Route
              path="/certifications"
              element={<CertificationsDashboard />}
            />
            <Route path="/bootcamps" element={<BootcampsDashboard />} />
            <Route path="/job-portal" element={<JobPortal />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
