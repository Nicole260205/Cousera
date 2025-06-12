import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("Renderiza o título do BookingForm", () => {
  render(<BookingForm />);
  const heading = screen.getByText(/faça sua reserva/i);
  expect(heading).toBeInTheDocument();
});
