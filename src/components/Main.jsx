import { Routes, Route } from "react-router-dom";
import React, { useReducer } from "react";
import Hero from "./Hero";
import Highlights from "./Highlights";
import Testimonials from "./Testimonials";
import About from "./About";
import BookingPage from "../pages/BookingPage"; 

const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
}

const updateTimes = (state, action) => {
  if (action.type === "update"){
    return ["17:00", "18:30", "19:30", "20:30"];
  }
  return state
}

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

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
