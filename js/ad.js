
const contactModal = document.querySelector(".contact-modal");
const overlay = document.querySelector(".overlay");
const hidden = document.querySelector(".hidden");
const contactModalClose = document.querySelector(".contact-close-btn");
const contactModalBtn = document.querySelector(".enquire-now");

const displayModal = function () {
  contactModal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeModal = function () {
  contactModal.classList.add("hidden");
  overlay.classList.add("hidden");
};

contactModalBtn.addEventListener("click", displayModal);
contactModalClose.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !contactModal.classList.contains("hidden")) {
    closeModal();
  }
});