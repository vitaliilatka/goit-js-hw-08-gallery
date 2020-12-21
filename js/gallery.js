import gallery from "./gallery-items.js";

const refs = {
  galleryList: document.querySelector(".js-gallery"),
  lightBox: document.querySelector(".js-lightbox"),
  bigImg: document.querySelector(".lightbox__image"),
  closeBtn: document.querySelector(".lightbox__button"),
};
// Создание и рендер разметки по массиву данных и предоставленному шаблону.
const createElement = ({ preview, original, description }, ind) =>
  refs.galleryList.insertAdjacentHTML(
    "beforeend",
    `<li class="gallery__item">
  <a
    class="gallery__link"
    href=${original}
  >
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      data-index=${ind}
      alt='${description}'
    />
  </a>
</li>`
  );

let activeIndex;
gallery.map((image, ind) => createElement(image, ind));

refs.galleryList.addEventListener("click", onGalleryClick);
refs.closeBtn.addEventListener("click", onCloseModal);
refs.lightBox.addEventListener("click", onBackdropClick);

// Клик по галерее
function onGalleryClick(event) {
  event.preventDefault();
  const imgRef = event.target;
  if (imgRef.nodeName !== "IMG") {
    return;
  }
  const bigImgURL = imgRef.dataset.source;
  activeIndex = Number(imgRef.dataset.index);
  onOpenModal();
  setBigImgSrc(bigImgURL, imgRef.alt);
}

// Открытие модалки
function onOpenModal() {
  window.addEventListener("keydown", onEscPress);
  window.addEventListener("keydown", onArrowLeftPress);
  window.addEventListener("keydown", onArrowRightPress);
  refs.lightBox.classList.add("is-open");
}

// Вставка большого изображения
function setBigImgSrc(url, alt) {
  refs.bigImg.src = url;
  refs.bigImg.alt = alt;
}
// Клик по бекдропу
function onBackdropClick(event) {
  if (event.target.nodeName !== "IMG") {
    onCloseModal();
  }
}

// Закрытие модалки
function onCloseModal() {
  window.removeEventListener("keydown", onEscPress);
  window.removeEventListener("keydown", onArrowLeftPress);
  window.removeEventListener("keydown", onArrowRightPress);
  refs.lightBox.classList.remove("is-open");
  refs.bigImg.src = "";
  refs.bigImg.alt = "";
}
// Нажатие Escape
function onEscPress(event) {
  if (event.code === "Escape") {
    onCloseModal();
  }
}

function onArrowLeftPress(event) {
  if (event.code === "ArrowLeft") {
    activeIndex = activeIndex === 0 ? gallery.length - 1 : activeIndex - 1;
    refs.bigImg.src = gallery[activeIndex].original;
    refs.bigImg.alt = gallery[activeIndex].description;
  }
}
function onArrowRightPress(event) {
  if (event.code === "ArrowRight") {
    activeIndex = activeIndex === gallery.length - 1 ? 0 : activeIndex + 1;
    refs.bigImg.src = gallery[activeIndex].original;
    refs.bigImg.alt = gallery[activeIndex].description;
  }
}