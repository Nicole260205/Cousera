import React from 'react'
import BookingForm from '../components/BookingForm'


function BookingPage({ availableTimes, dispatch }) {
  return (
    <section className='booking-form'>
      <h1>Make your reservations</h1>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </section>
  );
}

export default BookingPage
