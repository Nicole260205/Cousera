import React, { useState } from "react";

function BookingForm({ availableTimes = [], dispatch }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { date, time, guests, occasion };

    const success = await submitAPI(formData);

    if (success) {
      alert("Reservation sent!");
    } else {
      alert("There was a problem with your reservation.");
    }
  };

  return (
    <form className="form-book" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="res-date">
          <span className="material-symbols-outlined">calendar_today</span>
          Choose date:
        </label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={(e) => {
            setDate(selectedDate);
            dispatch({type: "UPDATE_TIMES", date: selectedDate})
          }}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="res-time">
          <span className="material-symbols-outlined">schedule</span>
          Choose time:
        </label>
        <select
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
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
          min="1"
          max="10"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
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
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
      </div>

      <button type="submit">Send Reservation</button>
    </form>
  );
}

export default BookingForm;
