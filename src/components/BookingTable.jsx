import React from "react";

function BookingTable({ data }) {
  if (!data || data.length === 0) {
    return <p>Sem reservas no momento.</p>;
  }

  return (
    <table className="booking-table">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Data</th>
          <th>Horário</th>
          <th>Número de Convidados</th>
        </tr>
      </thead>
      <tbody>
        {data.map((reserva, index) => (
          <tr key={index}>
            <td>{reserva.name}</td>
            <td>{reserva.date}</td>
            <td>{reserva.time}</td>
            <td>{reserva.guests}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default BookingTable;
