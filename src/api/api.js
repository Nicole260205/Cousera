export const fetchAPI = (date) => {
  let result = [];
  const random = date.getDate();

  for (let i = 17; i <= 23; i++) {
    if (Math.random() < 0.5) {
      result.push(`${i}:00`);
    }
    if (Math.random() < 0.5) {
      result.push(`${i}:30`);
    }
  }

  return result;
};

export const submitAPI = (formData) => {
  return true;
};
