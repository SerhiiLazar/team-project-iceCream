(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open4]"),
    closeModalBtn: document.querySelector("[data-modal-close4]"),
    modal: document.querySelector("[data-modal4]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();