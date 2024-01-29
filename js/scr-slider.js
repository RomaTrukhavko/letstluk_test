const sliders = document.querySelectorAll("[data-slider]");

sliders.forEach(slider => {
	const track = slider.querySelector("[data-slider-track]");
	const prev = slider.querySelector("[data-slider-prev]");
	const next = slider.querySelector("[data-slider-next]");

	if (track) {

		prev.addEventListener("click", () => {
			next.disabled = false;
			

			track.scrollTo({
				left: track.scrollLeft - track.firstElementChild.offsetWidth,
				behavior: "smooth"
			});
		});

		next.addEventListener("click", () => {
			prev.disabled = false;
			
			track.scrollTo({
				left: track.scrollLeft + track.firstElementChild.offsetWidth,
				behavior: "smooth"
			});
		});

		track.addEventListener("scroll", () => {
			const trackScrollWidth = track.scrollWidth;
			const trackOuterWidth = track.clientWidth;

			prev.disabled = false;
			next.disabled = false;
			

			if (track.scrollLeft <= 0) prev.disabled = true; //prev.setAttribute("disabled", "");
			if (track.scrollLeft === trackScrollWidth - trackOuterWidth) next.disabled = true; //next.setAttribute("disabled", "");
		});

	};
});

                var searchButton = document.getElementById('search-button');
                var closeButton = document.getElementById('close-button');
                var searchPopup = document.getElementById('search-popup');
                var searchInput = document.getElementById('search-input');
                searchButton.addEventListener('click', function() {
                    searchPopup.style.display = 'block';
                    searchInput.focus();
                });
                closeButton.addEventListener('click', function() {
                    searchPopup.style.display = 'none';
                });
                searchInput.addEventListener('input', function() {
                    var searchQuery = searchInput.value;
                    // Дополнительный код для выполнения поиска на сайте
                    console.log('Search:', searchQuery);
                });
                searchPopup.addEventListener('click', function(event) {
                    if (event.target === searchPopup) {
                        searchPopup.style.display = 'none';
                    }
                });
                // выезжающий блок провайдера
                var smiley = document.getElementById('smiley');
                var popup = document.getElementById('popup');
                smiley.addEventListener('click', function() {
                    togglePopup();
                });
                document.addEventListener('click', function(event) {
                    if (event.target !== popup && event.target !== smiley) {
                        popup.style.display = 'none';
                    }
                });

                function togglePopup() {
                    if (popup.style.display === 'block') {
                        popup.style.display = 'none';
                    } else {
                        popup.style.display = 'block';
                    }
                }

  function look(elemId) {
                        var elem = document.getElementById(elemId);
                        elem.style.display === "none" ? elem.style.display = "block" : elem.style.display = "none";
                    }
                    document.querySelector(".menu-locals-loyout").addEventListener("click", function(e) {
                        document.querySelector(".arrow-up").classList.toggle("active");
                    });


document.addEventListener('DOMContentLoaded', function() {
  var popup = document.getElementById('popup-form');
  var openPopupBtn = document.getElementById('open-popup');

  function togglePopup() {
    popup.style.display = (popup.style.display === 'none' || popup.style.display === '') ? 'block' : 'none';
  }

  function closePopup() {
    popup.style.display = 'none';
  }

  openPopupBtn.addEventListener('click', togglePopup);
  popup.addEventListener('click', function(event) {
    if (event.target === popup) {
      closePopup();
    }
  });
});