import React, { useState } from "react";

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    guests: 1,
    occasion: "Birthday",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "date") {
      dispatch({ type: "UPDATE_TIMES", date: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      submitForm(formData);
    }
  };

  const isFormValid = () => {
    return (
      formData.name.trim().length >= 2 &&
      formData.date &&
      formData.time &&
      formData.guests >= 1 &&
      formData.guests <= 10
    );
  };

  return (
    <form onSubmit={handleSubmit} className="form-book">
      <div className="form-group">
        <label htmlFor="name">
          <span className="material-symbols-outlined">person</span>
          Your name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          minLength={2}
        />
      </div>

      <div className="form-group">
        <label htmlFor="date">
          <span className="material-symbols-outlined">calendar_today</span>
          Choose date:
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          min={new Date().toISOString().split("T")[0]} 
        />
      </div>

      <div className="form-group">
        <label htmlFor="time">
          <span className="material-symbols-outlined">schedule</span>
          Choose time:
        </label>
        <select
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            -- Select a time --
          </option>
          {availableTimes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="guests">
          <span className="material-symbols-outlined">group</span>
          Guests:
        </label>
        <input
          type="number"
          id="guests"
          name="guests"
          min="1"
          max="10"
          value={formData.guests}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="occasion">
          <span className="material-symbols-outlined">celebration</span>
          Occasion:
        </label>
        <select
          id="occasion"
          name="occasion"
          value={formData.occasion}
          onChange={handleChange}
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
      </div>

      <button type="submit" disabled={!isFormValid()}>
        Send Reservation
      </button>
    </form>
  );
}

export default BookingForm;
