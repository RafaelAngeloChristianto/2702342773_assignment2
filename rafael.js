document.addEventListener("DOMContentLoaded", function () {
    const stars = document.querySelectorAll(".star");
    let selectedRating = 0;

    stars.forEach((star) => {
        star.addEventListener("mouseout", function () {
            highlightStars(selectedRating);
        });

        star.addEventListener("click", function () {
            selectedRating = this.getAttribute("data-value");
            highlightStars(selectedRating);
        });
    });

    function highlightStars(rating) {
        stars.forEach((star) => {
            star.style.color =
                star.getAttribute("data-value") <= rating ? "gold" : "#ccc";
        });
    }
});



document.addEventListener("DOMContentLoaded", function () {
    const stars = document.querySelectorAll(".star2");
    let selectedRating = 0;

    stars.forEach((star2) => {
        star2.addEventListener("mouseout", function () {
            highlightStars(selectedRating);
        });

        star2.addEventListener("click", function () {
            selectedRating = this.getAttribute("data-value");
            highlightStars(selectedRating);
        });
    });

    function highlightStars(rating) {
        stars.forEach((star2) => {
            star2.style.color =
                star2.getAttribute("data-value") <= rating ? "gold" : "#ccc";
        });
    }
});
