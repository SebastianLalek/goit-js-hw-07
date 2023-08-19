import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

galleryItems.forEach(addItem);

function addItem(element) {
  const galleryItem = document.createElement("li");
  galleryItem.classList.add("gallery__item");

  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__link");
  galleryLink.href = element.original;
  galleryLink.addEventListener("click", (e) => e.preventDefault());

  const galleryImage = document.createElement("img");
  galleryImage.classList.add("gallery__image");
  galleryImage.src = element.preview;
  galleryImage.alt = element.description;

  galleryLink.append(galleryImage);
  galleryItem.append(galleryLink);
  gallery.append(galleryItem);
}

gallery.addEventListener("click", () => {
  const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
});
