import "./App.css";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactUs from "./components/ContactUs/ContactUs";
import ServiceProvider from "./components/Dashboard/ServiceProvider";
import About from "./components/About/About";
import Category from "./components/Category/Category";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/serviceprovider" element={<ServiceProvider />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contactus" element={<ContactUs />} />
          <Route exact path="/category" element={<Category />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
