import { galleryItems } from './gallery-items.js';
// Change code below this line



const galleryContainer = document.querySelector('.gallery');
const createMarkup = isCreateGalleryMarkup(galleryItems);

function isCreateGalleryMarkup(items) {
    return items.map(({ preview, original, description }) => {
        return `
       <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"               
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
      </div>`
    }).join('');  
}

galleryContainer.insertAdjacentHTML("beforeend", createMarkup);

galleryContainer.addEventListener('click', onImageClick)
console.log(galleryContainer);

function onImageClick(event) {
  const isImageEl = event.target.classList.contains('gallery__image')
  if (!isImageEl) {
    return;
  }
    event.preventDefault();
    isModalShow(event.target.dataset.source);
};

let modalEl;

function isModalShow(dataSource) {
  modalEl = basicLightbox.create(
    `
    <div class="modal">
        <img src="${dataSource}"  width="900" height="600" ></img>
    </div>
    `,
    {
        onShow: () =>  onOpenModal(),
        onClose: () => onCloseModal()
    }
  );
  modalEl.show();
  console.log(modalEl.show())
}

function onOpenModal() {
  window.addEventListener('keydown', onEscKeyPress);
  
}

function onCloseModal() {
  window.removeEventListener('keydown', onEscKeyPress);
  
}

function onEscKeyPress(event) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = event.code === ESC_KEY_CODE;

  if (isEscKey) {
    modalEl.close();
  }
    
}


