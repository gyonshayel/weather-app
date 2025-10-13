export function formatDate(date) {
  const forecastDate = new Date(date);
  const today = new Date();

  // If same day, return "Today"
  if (
    forecastDate.getDate() === today.getDate() &&
    forecastDate.getMonth() === today.getMonth() &&
    forecastDate.getFullYear() === today.getFullYear()
  ) {
    return "Today";
  }

  // Otherwise, return weekday name, e.g., "Tuesday"
  return forecastDate.toLocaleDateString(undefined, { weekday: "long" });
}
