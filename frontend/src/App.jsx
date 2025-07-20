import LoginPage from "./pages/login";
import SignupPage from "./pages/Signup";
import HomePage from "./pages/HomePage.jsx";
import Menu from "./components/Menu.jsx";
import ReservationForm from "./components/ReservationForm.jsx";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservationform" element={<ReservationForm />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
