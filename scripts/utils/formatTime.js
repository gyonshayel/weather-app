export function formatTime(timeString) {
  const date = new Date(timeString);
  return date.toLocaleTimeString([], {
    hour: "numeric",
    hour12: true,
  });
}
