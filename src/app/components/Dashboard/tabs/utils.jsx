export const truncateToDecimals = (num, dec = 2) => {
  const calcDec = Math.pow(10, dec);
  return String(Math.trunc(num * calcDec) / calcDec);
};
