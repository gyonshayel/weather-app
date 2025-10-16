export function handleScroll() {
  const hourlyForecastData = document.querySelector(".hourly-forecast__data");
  const btnLeft = document.querySelector(".scroll-btn.left");
  const btnRight = document.querySelector(".scroll-btn.right");

  hourlyForecastData.scrollTo({
    left: 0,
    behavior: "smooth",
  });

  btnLeft.addEventListener("click", () => {
    hourlyForecastData.scrollBy({ left: -150, behavior: "smooth" });
  });

  btnRight.addEventListener("click", () => {
    hourlyForecastData.scrollBy({ left: 150, behavior: "smooth" });
  });
}
