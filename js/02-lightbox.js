import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
const galleryInnerItems = createGalleryItems(galleryItems);

function createGalleryItems(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`
    })
    .join('');
}

galleryEl.insertAdjacentHTML('beforeend', galleryInnerItems);

let lightbox = new SimpleLightbox('.gallery a', { 
  captions: true,
  captionsData: 'alt',
  captionDelay: 250

 });

