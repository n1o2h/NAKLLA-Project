document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star');
    const emoji = document.querySelector('.emoji');
    const ratingLabel = document.querySelector('.rating-label');

    const emojiFaces = ['😞', '😟', '😐', '🙂', '😃'];
    const ratingTexts = ['Very Bad', 'Bad', 'Okay', 'Good', 'Excellent'];

    stars.forEach(star => {
        star.addEventListener('click', () => {
            const rating = parseInt(star.getAttribute('data-value'));
            updateRating(rating);
        });

        star.addEventListener('mouseover', () => {
            const rating = parseInt(star.getAttribute('data-value'));
            highlightStars(rating);
        });

        star.addEventListener('mouseout', () => {
            const selectedStar = document.querySelector('.star.selected');
            const rating = selectedStar ? parseInt(selectedStar.getAttribute('data-value')) : 0;
            highlightStars(rating);
        });
    });

    function updateRating(rating) {
        stars.forEach(star => {
            star.classList.toggle('selected', parseInt(star.getAttribute('data-value')) === rating);
        });

        emoji.textContent = emojiFaces[rating - 1];
        ratingLabel.textContent = ratingTexts[rating - 1];
    }

    function highlightStars(rating) {
        stars.forEach(star => {
            star.classList.toggle('highlighted', parseInt(star.getAttribute('data-value')) <= rating);
        });
    }
});
