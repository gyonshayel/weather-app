let isScrollInitialized = false;
const hourlyForecastData = document.querySelector(".hourly-forecast__data");
const btnLeft = document.querySelector(".scroll-btn.left");
const btnRight = document.querySelector(".scroll-btn.right");

export function handleScroll() {
  hourlyForecastData.scrollTo({
    left: 0,
    behavior: "smooth",
  });

  if (isScrollInitialized) return; // Preventing duplicate listeners
  isScrollInitialized = true;

  btnLeft.addEventListener("click", () => {
    hourlyForecastData.scrollBy({ left: -150, behavior: "smooth" });
  });

  btnRight.addEventListener("click", () => {
    hourlyForecastData.scrollBy({ left: 150, behavior: "smooth" });
  });
}
