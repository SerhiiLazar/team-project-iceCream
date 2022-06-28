(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open5]"),
    closeModalBtn: document.querySelector("[data-modal-close5]"),
    modal: document.querySelector("[data-modal5]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();