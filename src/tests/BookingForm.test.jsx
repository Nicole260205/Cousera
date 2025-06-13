import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

const mockDispatch = jest.fn();
const mockSubmitForm = jest.fn();
const availableTimes = ["17:00", "18:00", "19:00"];

describe("BookingForm", () => {
  beforeEach(() => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );
  });

  test("renders all input fields with correct HTML5 validation", () => {
    const nameInput = screen.getByLabelText(/your name/i);
    const dateInput = screen.getByLabelText(/choose date/i);
    const timeSelect = screen.getByLabelText(/choose time/i);
    const guestsInput = screen.getByLabelText(/guests/i);

    expect(nameInput).toBeRequired();
    expect(nameInput).toHaveAttribute("minLength", "2");

    expect(dateInput).toBeRequired();
    expect(dateInput).toHaveAttribute("type", "date");

    expect(timeSelect).toBeRequired();

    expect(guestsInput).toBeRequired();
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
  });

  test("form is invalid with missing required fields", () => {
    const submitButton = screen.getByRole("button", {
      name: /send reservation/i,
    });
    expect(submitButton).toBeDisabled();
  });

  test("form becomes valid when filled correctly", () => {
    const nameInput = screen.getByLabelText(/your name/i);
    const dateInput = screen.getByLabelText(/choose date/i);
    const timeSelect = screen.getByLabelText(/choose time/i);
    const guestsInput = screen.getByLabelText(/guests/i);

    fireEvent.change(nameInput, { target: { value: "Nicole" } });
    fireEvent.change(dateInput, { target: { value: "2025-06-10" } });
    fireEvent.change(timeSelect, { target: { value: "17:00" } });
    fireEvent.change(guestsInput, { target: { value: "3" } });

    const submitButton = screen.getByRole("button", {
      name: /send reservation/i,
    });
    expect(submitButton).not.toBeDisabled();
  });

  test("submits form with valid data", () => {
    const nameInput = screen.getByLabelText(/your name/i);
    const dateInput = screen.getByLabelText(/choose date/i);
    const timeSelect = screen.getByLabelText(/choose time/i);
    const guestsInput = screen.getByLabelText(/guests/i);
    const submitButton = screen.getByRole("button", {
      name: /send reservation/i,
    });

    fireEvent.change(nameInput, { target: { value: "Nicole" } });
    fireEvent.change(dateInput, { target: { value: "2025-06-10" } });
    fireEvent.change(timeSelect, { target: { value: "17:00" } });
    fireEvent.change(guestsInput, { target: { value: "2" } });

    fireEvent.click(submitButton);

    expect(mockSubmitForm).toHaveBeenCalledWith({
      name: "Nicole",
      date: "2025-06-10",
      time: "17:00",
      guests: "2",
      occasion: "Birthday",
    });
  });

  test("dispatch is called when date changes", () => {
    const dateInput = screen.getByLabelText(/choose date/i);
    fireEvent.change(dateInput, { target: { value: "2025-06-15" } });

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "UPDATE_TIMES",
      date: "2025-06-15",
    });
  });
});
