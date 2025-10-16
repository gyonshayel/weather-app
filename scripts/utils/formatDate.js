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

  // Else return weekday name
  return forecastDate.toLocaleDateString(undefined, { weekday: "long" });
}
