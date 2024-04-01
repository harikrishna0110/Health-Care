import "./app.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import React from "react";
import ServiceList from "./components/Services/ServiceList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Contact from "./pages/Contact";
import FindDoctor from "./pages/FindDoctor";
import Bgvdo from "./components/Bgvdo";
import Admin from "./pages/Admin";
import Loader from "./components/Loader";
import TrialLoad from "./pages/TrialLoad";
import SearchLocation from "./components/Location/SearchLocation";
import FindLocation from "./pages/FindLocation";
import BookAppointment from "./pages/BookAppointment";
import LearnMore from "./pages/LearnMore";
import SearchDoctor from "./components/SearchDoctor";
import SearchDoctorPage from "./pages/SearchDoctorPage";
import Timepicker from "./components/Timepicker";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path = "/home" element={<Home/>}/> */}
        <Route path="/findoctor/:city" element={<FindDoctor />}/>
        <Route path="/findoctor" element={<FindDoctor />} />
        <Route path="/serviceList" element={<ServiceList />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bgvdo" element={<Bgvdo />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/load" element={<Loader />} />
        <Route path="/trial" element={<TrialLoad />} />
        <Route path="/location" element={<FindLocation />} />
        <Route path="/bookaptmnt" element={<BookAppointment/>} />
        <Route path="/learnmore" element={<LearnMore/>} />
        <Route path="/searchbardocotor" element={<SearchDoctor/>} />
        <Route path="/searchdoctor" element={<SearchDoctorPage/>} />
        <Route path="/time" element={<Timepicker/>} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
