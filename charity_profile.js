document.addEventListener("DOMContentLoaded", function () {
    var volunteerButton = document.querySelector(".volunteer-button");
    var donateButton = document.querySelector(".donate-button");
    var informationButton = document.querySelector(".information-button");

    volunteerButton.addEventListener("click", function () {
        displayVolunteerForm();
    });

    donateButton.addEventListener("click", function () {
        displayDonationForm();
    });

function displayVolunteerForm() {
    var volunteerForm = document.getElementById("volunteer-form");
    volunteerForm.style.display = "block";
}

function submitVolunteerForm() {
    // Add logic to handle volunteer form submission
    var volunteerForm = document.getElementById("volunteer-form");
    volunteerForm.style.display = "none";
}

function displayDonationForm() {
    var donationForm = document.getElementById("donation-form");
    donationForm.style.display = "block";
}

function submitDonationForm() {
    var donationForm = document.getElementById("donation-form");
    donationForm.style.display = "none";
}
