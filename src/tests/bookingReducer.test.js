import { initializeTimes } from "../BookingPage";
import { fetchAPI } from "../api";

jest.mock("../api");

test("initializeTimes deve retornar horários disponíveis", () => {
  const fakeTimes = ["17:00", "18:00", "19:00"];
  fetchAPI.mockReturnValue(fakeTimes);

  const result = initializeTimes();

  expect(result).toEqual(fakeTimes);
  expect(fetchAPI).toHaveBeenCalledTimes(1);
});
