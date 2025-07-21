let degreesC = 26;

export const getTemp = (min = -30, max = 50) => {
  const change = Math.random() < 0.5 ? -1 : 1;
  degreesC += change;

  degreesC = Math.max(min, Math.min(max, degreesC));

  return degreesC;
};
