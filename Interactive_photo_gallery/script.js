document.querySelectorAll('.photo').forEach(photo => {
    photo.addEventListener('click', function() {
        const fullSizeView = document.getElementById('fullSizeView');
        const fullSizeImage = document.getElementById('fullSizeImage');
        const photoDetails = document.getElementById('photoDetails');

        fullSizeImage.src = this.querySelector('img').src;
        photoDetails.textContent = this.getAttribute('data-details');
        fullSizeView.style.display = 'flex';
    });
});

function closeFullSizeView() {
    const fullSizeView = document.getElementById('fullSizeView');
    fullSizeView.style.display = 'none';
}
