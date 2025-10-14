export function formatTemp(celsius, fahrenheit, unit) {
  return unit === "c"
    ? `${Math.round(celsius)}°`
    : `${Math.round(fahrenheit)}°`;
}
