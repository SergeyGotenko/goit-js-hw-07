import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryContainer = document.querySelector('.gallery');

const renderGalleryMarkup = galleryItems.map(({ preview, original, description }) =>
  `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
).join('');
    
galleryContainer.insertAdjacentHTML("beforeend", renderGalleryMarkup);



let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function () {
  
});
