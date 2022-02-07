import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


// console.log(isCreateGalleryMarkup(galleryItems));

const galleryContainer = document.querySelector('.gallery');

const isCreateGalleryMarkup = galleryItems.map(({preview, original, description }) => 
        `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>`
    ).join('')
    
galleryContainer.insertAdjacentHTML("beforeend", isCreateGalleryMarkup);





 