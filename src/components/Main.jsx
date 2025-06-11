import { Routes, Route } from "react-router-dom";
import React, { useReducer } from "react";
import Hero from "./Hero";
import Highlights from "./Highlights";
import Testimonials from "./Testimonials";
import About from "./About";
import BookingPage from "../pages/BookingPage";
import { initializeTimes, updateTimes } from "../utils/times";

function Main() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

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
          <BookingPage availableTimes={availableTimes} dispatch={dispatch} />
        }
      />
    </Routes>
  );
}

export default Main;
