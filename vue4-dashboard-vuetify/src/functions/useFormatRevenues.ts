/* eslint-disable @typescript-eslint/no-explicit-any */
export default function useFormatRevenue(r: any) {
  const result = parseFloat(r).toFixed(2);
  return `$ ${result}`;
}
