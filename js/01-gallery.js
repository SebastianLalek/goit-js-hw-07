import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const galleryImages = galleryItems
  .map(
    (img) =>
      `<li class="gallery__item">
  <a class="gallery__link" href="${img.original}">
  <img
  class="gallery__image"
  src="${img.preview}"
  data-source="${img.original}"
  alt="${img.description}"
  />
  </a>
  </li>`
  )
  .join("");

gallery.insertAdjacentHTML("afterbegin", galleryImages);

gallery.addEventListener("click", (e) => {
  e.preventDefault();
  basicLightbox
    .create(`<img src="${e.target.dataset.source}" width="800">`)
    .show();
});
