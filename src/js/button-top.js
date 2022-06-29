(() => {
  const refs = {
    scrollUpButton: document.querySelector("[scroll-up-btn]"),
  };

  refs.scrollUpButton.addEventListener("click", topFunction);
	window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.documentElement.scrollTop > 50) {
			refs.scrollUpButton.style.display = "block";
		}
		 else {
			refs.scrollUpButton.style.display = "none";
		}
	}
	function topFunction() {
		document.body.scrollTop = 0; // For Safari
		refs.scrollUpButton.style.display = "none";
		document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	}
})();