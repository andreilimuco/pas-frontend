import "./App.css";
import { UserProvider } from "./pages/UserContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import AppNavbar from "./components/AppNavbar";
import AppFooter from "./components/AppFooter";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PageNotFound from "./pages/PageNotFound";
import Customer from "./pages/Customer";
import Policy from "./pages/Policy";

function App() {
  const [user, setUser] = useState({
    id: "",
    firstName: "",
  });

  return (
    <UserProvider value={user}>
      <Router>
        <AppNavbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/customers" element={<Customer />} />
          <Route exact path="/policies" element={<Policy />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="*" element={<PageNotFound />} />
        </Routes>
        <AppFooter />
      </Router>
    </UserProvider>
  );
}

export default App;
