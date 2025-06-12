import { initializeTimes, updateTimes } from "./bookingUtils";

test("initializeTimes retorna horários iniciais esperados", () => {
  const result = initializeTimes();
  expect(result).toEqual([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);
});

test("updateTimes retorna novo array quando action.type é 'update'", () => {
  const initialState = ["17:00"];
  const action = { type: "update" };
  const result = updateTimes(initialState, action);
  expect(result).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00"]);
});

test("updateTimes retorna o mesmo estado se action.type não for 'update'", () => {
  const initialState = ["17:00", "18:00"];
  const action = { type: "algumaOutraCoisa" };
  const result = updateTimes(initialState, action);
  expect(result).toBe(initialState);
});
