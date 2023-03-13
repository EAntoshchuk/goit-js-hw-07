import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryItems(galleryItems);
galleryContainer.insertAdjacentHTML("afterbegin", galleryMarkup);

function createGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item gallery__link" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join("");
}

galleryEL.addEventListener("click", onClickImg);

function onClickImg(event) {
  event.preventDefault();
  const isGalleryLink = event.target.classList.contains("gallery__link");

  if (!isGalleryLink) {
    return;
  }

  const watchEl = event.target;
  removeActiveLinkClass();
  addActiveLinkClass(watchEl);
  // console.log(watchEl);
}

function removeActiveLinkClass() {
  const currentActiveImg = document.querySelector(".gallery__link");
  if (currentActiveImg) {
    currentActiveImg.classList.remove(".gallery__link");
  }
}

function addActiveLinkClass(link) {
  link.classList.add(".gallery__link");
}

console.log(galleryMarkup);
