export const calcCost = ({ hours, overtime, rate, overtimeRate }) => {
  return hours * rate + overtime * (overtimeRate || rate * 1.5);
};
