import { Routes, Route, useNavigate } from "react-router-dom";
import React, { useReducer } from "react";
import Hero from "./Hero";
import Highlights from "./Highlights";
import Testimonials from "./Testimonials";
import About from "./About";
import BookingPage from "../pages/BookingPage";
import ConfirmedBooking from "../components/ConfirmedBooking"; 
import { initializeTimes, updateTimes } from "../utils/times";
import { submitAPI } from "../api/api";

function Main() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );
  const navigate = useNavigate();

  const submitForm = async (formData) => {
    const success = await submitAPI(formData);
    if (success) {
      navigate("/confirmed");
    } else {
      alert("Erro ao enviar reserva. Tente novamente.");
    }
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Hero />
            <Highlights />
            <Testimonials />
            <About />
          </>
        }
      />
      <Route path="/about" element={<About />} />
      <Route
        path="/booking"
        element={
          <BookingPage
            availableTimes={availableTimes}
            dispatch={dispatch}
            submitForm={submitForm} // ✅ passa submitForm
          />
        }
      />
      <Route path="/confirmed" element={<ConfirmedBooking />} />
    </Routes>
  );
}

export default Main;
