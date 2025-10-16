const spinner = document.getElementById("spinner");

export function showLoadingSpinner() {
  spinner.style.display = "block";
}

export function hideLoadingSpinner() {
  spinner.style.display = "none";
}
