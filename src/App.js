import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Client from "./components/Client";
import Admin from "./components/Admin";
import AdminLogin from "./components/AdminLogin";
import ApproveLoan from "./components/ApproveLoan";
import DeclineLoan from "./components/DeclineLoan";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/client" element={<Client />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/adminLogin" element={<AdminLogin />} />
        <Route path="/approveLoan" element={<ApproveLoan />} />
        <Route path="/declineLoan" element={<DeclineLoan />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
