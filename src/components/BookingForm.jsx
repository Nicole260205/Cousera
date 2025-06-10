import React, { useState} from 'react'

function BookingForm() {
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [guests, setGuests] = useState(1)
  const [occasion, setOccasion] = useState("")
  const [availableTimes, setavailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({
      date,
      time,
      guests,
      occasion,
    })
    alert("Reservation sent");
  }

  const handleChange = (e) => {
    const newDate = e.target.value
    setDate(newDate)
    dispatchEvent({type: "update", date: newDate})
  }


  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "grid", maxWidth: "300px", gap: "20px" }}
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <label htmlFor="res-time">Choose time</label>
      <select
        type="time"
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
      <label htmlFor="res-date">Choose date</label>
      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        required
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      <button type="submit">Send Reservation</button>
    </form>
  );
}

export default BookingForm
