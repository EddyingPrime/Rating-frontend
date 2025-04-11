document.addEventListener("DOMContentLoaded", function () {
  // Select elements
  const ratingButtons = document.querySelectorAll(".rating-btn");
  const submitButton = document.querySelector(".submit");
  const thankYouCard = document.querySelector(".thank-you-card");
  const ratingCard = document.querySelector(".rating-card");
  const selectedRatingText = document.querySelector(".selected-rating");

  // Variable to store the selected rating
  let selectedRating = null;

  // Add event listener to rating buttons
  ratingButtons.forEach((button) => {
    button.addEventListener("click", function () {
      selectedRating = button.textContent; // Get the rating value
      // Highlight the selected rating button
      ratingButtons.forEach((btn) => btn.classList.remove("selected"));
      button.classList.add("selected");

      // Enable the submit button
      submitButton.disabled = false;
    });
  });

  // Add event listener to submit button
  submitButton.addEventListener("click", function () {
    if (selectedRating !== null) {
      // Update the selected rating text
      selectedRatingText.textContent = `You selected ${selectedRating} out of 5`;

      // Hide the rating card and show the thank you card
      ratingCard.style.display = "none";
      thankYouCard.style.display = "block";
    } else {
      alert("Please select a rating before submitting.");
    }
  });
});
