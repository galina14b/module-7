import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
const galleryItem = createGalleryItems(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', galleryItem);

function createGalleryItems(gallery) {
  return gallery
    .map(({ original, preview, description }) => {
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
      </div>
      `;
    })
    .join('');
}

galleryEl.addEventListener('click', openModalImg);
document.addEventListener('keydown', closeModalImg);
let instance = null;

function openModalImg(e) {
  e.preventDefault();
  const imgUrl = e.target.dataset.source;

  instance = basicLightbox.create(`
    <img src="${imgUrl}" width="800" height="600">
  `)
  instance.show()
} 

function closeModalImg(e) {
  if (e.code == 'Escape') {
    if (!instance.visible()) {
      return
    } else {
      instance.close();
    }
  }
}



