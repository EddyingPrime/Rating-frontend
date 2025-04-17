const ratingButtons = document.querySelectorAll(".rating-btn");
const selectedRatingText = document.querySelector(".selected-rating");
const submitButton = document.querySelector(".submit");
const thankYouCard = document.querySelector(".thank-you-card");

let selectedRating = null;

ratingButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedRating = button.textContent;
    ratingButtons.forEach((btn) => btn.classList.remove("selected"));
    button.classList.add("selected");
    submitButton.disabled = false;
  });
});

submitButton.addEventListener("click", () => {
  if (selectedRating !== null) {
    selectedRatingText.textContent = `You selected ${selectedRating} out of 5`;
    thankYouCard.style.display = "block";
    document.querySelector(".rating-card").style.display = "none";
  }
});
