(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open8]"),
      closeModalBtn: document.querySelector("[data-modal-close8]"),
      modal: document.querySelector("[data-modal8]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();