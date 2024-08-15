let galleryContainer = document.getElementById('gallery-container');
let gallery = document.getElementById('gallery');

function openGallery(pic) {
    galleryContainer.style.display = 'flex';
    gallery.src = pic;
}
function closeGallery() {
    galleryContainer.style.display = 'none'
}