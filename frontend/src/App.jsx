import { Routes, Route } from "react-router-dom"; 
import Header from "./components/Header";
import SignUp from "./components/signup";
import Login from "./components/login";
import Dashboard from "./components/dashboard";
import "./index.css";


function App() {
  return (
    <div className="app">
      <Header />

      {/* This will be the switchboard: one block will show at a time */}
      <Routes>
        {/* This is for just a normal / and it will show the home page */}
        <Route path="/" element={<div style={{ padding: '60px', textAlign: 'center' }}><h1>Welcome to Urban Planner</h1></div>} />

        {/* This is for the signup page */}
        <Route path="/signup" element={<SignUp />} />

        {/* This is for the login page */}
        <Route path="/login" element={<Login />} />

        {/* This is for the dashboard page */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;

// don't touch this file for now, we will add more pages
