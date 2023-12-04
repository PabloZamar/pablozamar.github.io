document.addEventListener("DOMContentLoaded", function () {
    addHoverListener("charity1-details");
    addHoverListener("charity2-details");
    addHoverListener("charity3-details");
    addHoverListener("charity4-details");
});

function addHoverListener(charityId) {
    var charityDetails = document.getElementById(charityId);

    charityDetails.addEventListener("mouseenter", function () {
        charityDetails.querySelector(".additional-details").style.display = "block";
    });

    charityDetails.addEventListener("mouseleave", function () {
        charityDetails.querySelector(".additional-details").style.display = "none";
    });
}
