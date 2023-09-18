//import "./App.css";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactUs from "./components/ContactUs/ContactUs";
import ServiceProvider from "./components/Dashboard/ServiceProvider";
import About from "./components/About/About";
import Category from "./components/Category/Category";
import Customer from "./components/Dashboard/Customer";
import Finance from "./components/Finance/Finance";
import Download from "./components/Home/Download";
import SPDashboard from "./components/Dashboard/SPDashboard";
import DashCategory from "./components/Dashboard/Category";
import AddCategory from "./components/Dashboard/AddCategory";
import CSR from "./components/CSR/CSR";
import AddCSR from "./components/CSR/AddCSR";
import Complaints from "./components/Complaints/Complaints";
import Complaint from "./components/Complaints/Complaint";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/serviceprovider" element={<ServiceProvider />} />
          <Route exact path="/customer" element={<Customer />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/download" element={<Download />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contactus" element={<ContactUs />} />
          <Route exact path="/category" element={<DashCategory />} />
          <Route exact path="/finance" element={<Finance />} />
          <Route exact path="/spdashboard" element={<SPDashboard />} />
          <Route exact path="/home-category" element={<Category />} />
          <Route exact path="/addcategory" element={<AddCategory />} />
          <Route exact path="/csr" element={<CSR />} />
          <Route exact path="/addcsr" element={<AddCSR />} />
          <Route exact path="/complaints" element={<Complaints />} />
          <Route exact path="/complaint" element={<Complaint />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
